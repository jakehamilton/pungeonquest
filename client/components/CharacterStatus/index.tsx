import { FunctionComponent } from "preact";

const placeholders = [
	"Dungeon't",
	"Questionable",
	"Ready!",
	"Let's Go Already!",
	"Spellebrity",
	"Question Mark",
	"Elf Improvement",
];

const randomEmptyMessage = () => {
	const index = Math.floor(Math.random() * placeholders.length);

	return placeholders[index];
};

export enum Statuses {
	EMPTY = "",
	SUCCESS = "Success",
	MIXED = "Mixed Success",
	FAILURE = "Failure",
	LASER_FEELINGS = "Punbelievable",
	CRITICAL = "Critical Success",
}

interface CharacterStatusProps {
	status: Statuses;
	lastRoll: string;
	class?: string;
	[key: string]: any;
}

const CharacterStatus: FunctionComponent<CharacterStatusProps> = ({
	status,
	lastRoll,
	class: className,
	...props
}) => {
	return status === Statuses.LASER_FEELINGS ? (
		<div
			key={lastRoll}
			{...props}
			class={`font-thick animate animate-bounce-in ${className ?? ""}`}
		>
			<span class="text-purple-500">Pun</span>
			<span class="text-teal-500">believable</span>
		</div>
	) : (
		<div
			key={lastRoll}
			{...props}
			class={`font-thick animate animate-bounce-in ${
				status === Statuses.SUCCESS ? "text-green-500" : ""
			} ${status === Statuses.MIXED ? "text-yellow-500" : ""} ${
				status === Statuses.FAILURE ? "text-red-500" : ""
			} ${
				status === Statuses.CRITICAL
					? "dark:text-green-300 light:text-green-400"
					: ""
			} ${
				status === Statuses.EMPTY ? "dark:text-dark-50 light:text-gray-400" : ""
			} ${className ?? ""}`}
		>
			{status === Statuses.EMPTY ? randomEmptyMessage() : status}
		</div>
	);
};

export default CharacterStatus;
