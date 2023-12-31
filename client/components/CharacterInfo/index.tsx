import { FunctionComponent } from "preact";
import CharacterStatus, { Statuses } from "../CharacterStatus";

export const styles = {
	Alien: "👽",
	Android: "🤖",
	Dangerous: "💣",
	Heroic: "🦸",
	"Hot-Shot": "😎",
	Intrepid: "🤠",
	Savvy: "📚",
};

export const roles = {
	Knight: "⚔️",
	Bard: "🎤",
	Dungeoneer: "🧗",
	Gnome: "🍂",
	Rascal: "💰",
	Chum: "💕",
};

export interface CharacterInfoProps {
	name: string;
	style: keyof typeof styles;
	role: keyof typeof roles;
	status: Statuses;
	lastRoll: string;
}

const CharacterInfo: FunctionComponent<CharacterInfoProps> = ({
	name,
	style,
	role,
	status,
	lastRoll,
}) => {
	return (
		<div class="flex flex-col transition-all dark:bg-dark-400 light:bg-light-700 rounded-lg overflow-hidden w-55 h-32">
			<div class="dark:bg-dark-500 dark:text-gray-200 light:bg-light-900 light:text-gray-700 font-bold px-4 py-2">
				{name}
			</div>
			<div class="px-4 pt-3 grid grid-rows-1 grid-cols-2 grid-cols-[max-content,1fr]">
				{/*<div>{styles[style]}</div>
				<div class="ml-2 dark:text-gray-200 light:text-gray-800">
					{style as string}
				</div>
				*/}
				<div>{roles[role]}</div>
				<div class="ml-2 dark:text-gray-200 light:text-gray-800">
					{role as string}
				</div>
			</div>
			<CharacterStatus
				status={status}
				lastRoll={lastRoll}
				class="flex items-end justify-center flex-grow p-4 pt-0 text-size-[1.5rem]"
			/>
		</div>
	);
};

export default CharacterInfo;
