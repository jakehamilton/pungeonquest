import { FunctionComponent } from "preact";
import { ArrowRight, Github, Twitter } from "preact-feather";
import { Link } from "preact-router";
import { useState, useEffect } from "preact/hooks";
import useSocket from "../../hooks/useSocket";
import noop from "../../util/noop";
import ActionButton from "../ActionButton";
import ActionIcon from "../ActionIcon";

interface HeroProps {
	isPlayNowLoading?: boolean;
	onPlayNow?: (event: MouseEvent) => void;
}

const Hero: FunctionComponent<HeroProps> = ({
	isPlayNowLoading = false,
	onPlayNow = noop,
}) => {
	return (
		<>
			<div class="relative flex h-xl light:bg-hero-skulls-teal-200 dark:bg-hero-skulls-teal-800 items-center light:bg-light-300 dark:bg-dark-600">
				<div class="container flex flex-col mx-auto px-6 items-start justify-center">
					<h1 class="font-thick text-size-[4rem] text-teal-500">
						Pungeonquest
					</h1>
					<span class="prose-md text-teal-500">
						A{" "}
						<a
							href="https://johnharper.itch.io/lasers-feelings"
							target="_blank"
							rel="noopener noreferrer"
							class="underline"
						>
							Lasers & Feelings
						</a>{" "}
						hack for{" "}
						<a
							href="https://shop.landofeem.com/collections/frontpage/products/pungeon-quest-a-land-of-eem-adventure"
							target="_blank"
							rel="noopener noreferrer"
							class="underline"
						>
							Pungeonquest
						</a>
					</span>
					<ActionButton as={Link} href="/create">
						Play Now <ArrowRight class="ml-2 transition-all group-hover:ml-3" />
					</ActionButton>
				</div>
			</div>
			<div class="w-full flex justify-center gap-8 py-4 light:bg-light-700 dark:bg-dark-600">
				<a
					href="https://twitter.com/jakehamiltondev"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1 text-teal-500 hover:underline flex-nowrap"
				>
					<Twitter size={24} /> @jakehamiltondev
				</a>
				<span class="flex items-center gap-[0.35rem]">
					{/* Please direct feedback and support requests to the project's{" "} */}
					<a
						href="https://github.com/jakehamilton/pungeonquest/issues"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 text-teal-500 hover:underline flex-nowrap"
					>
						<Github size={24} /> Report an issue
					</a>
				</span>
			</div>
		</>
	);
};

export default Hero;
