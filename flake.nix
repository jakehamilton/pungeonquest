{
  description = "Pungeonquest";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-22.11";
    unstable.url = "github:nixos/nixpkgs/nixos-unstable";

    snowfall-lib = {
      url = "github:snowfallorg/lib";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs:
    inputs.snowfall-lib.mkFlake {
      inherit inputs;

      src = ./.;

      outputs-builder = channels: let
        inherit (channels.nixpkgs) lib buildNpmPackage makeWrapper esbuild nodejs;
        inherit (lib) getExe;
      in {
        packages = rec {
          default = pungeonquest;

          pungeonquest = buildNpmPackage {
            pname = "pungeonquest";
            version = inputs.self.sourceInfo.shortRev or "dirty";

            src = ./.;

            buildInputs = [makeWrapper];

            npmFlags = ["--ignore-scripts"];

            npmDepsHash = "sha256-Sx35x0vOkOQc9Zxg6G9Jhs4GoJDF9qrfUEKwOUA7ojo=";
            # NODE_OPTIONS = "--openssl-legacy-provider";

            buildPhase = ''
              esbuild=node_modules/esbuild

              rm $esbuild/bin/esbuild

              ln -sf ${esbuild}/bin/esbuild $esbuild/bin/esbuild

              npm run build
            '';

            installPhase = ''
              bin_target=$out/bin/pungeonquest
              libexec_target=$out/libexec/pungeonquest

              mkdir -p $(dirname $bin_target)
              mkdir -p $libexec_target/client

              mv server $libexec_target/
              mv node_modules $libexec_target/
              mv client/dist $libexec_target/client/

              makeWrapper $libexec_target/server/entry.js $bin_target \
                --set NODE_PATH "$libexec_target/node_modules"
            '';
          };
        };
      };
    };
}
