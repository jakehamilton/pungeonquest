import { Download } from "preact-feather";
import { route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import ActionButton from "../components/ActionButton";
import Header from "../components/Header";
import Hero from "../components/Hero";
import useSocket from "../hooks/useSocket";

const Home = () => {
	const [isCreatingGame, setIsCreatingGame] = useState(false);
	const { isConnected } = useSocket();

	const handlePlayNow = async () => {
		return;
	};

	return (
		<div class="h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto pb-10 light:bg-light-600 dark:bg-dark-500">
			<Header class="absolute top-0 left-0 right-0" />
			<Hero
				onPlayNow={handlePlayNow}
				isPlayNowLoading={!isConnected || isCreatingGame}
			/>
			<div class="container mx-auto px-6 pt-10 light:text-dark-600 dark:text-light-900">
				<h2 class="font-thick text-size-[2.5rem]">Get Started</h2>
				<p class="pt-2 prose-lg max-w-180">
					To start playing Pungeonquest, your game master will need a copy of
					the adventure. Make sure you have this on hand before you start!
				</p>
				<ActionButton
					as="a"
					href="https://shop.landofeem.com/collections/frontpage/products/pungeon-quest-a-land-of-eem-adventure"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Download class="mr-2" /> Adventure PDF
				</ActionButton>
				<p class="pt-2 prose-lg max-w-180"></p>
			</div>
		</div>
	);
};

export default Home;
