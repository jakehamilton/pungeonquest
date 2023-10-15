import { FunctionComponent, AnyComponent } from "preact";
import DynamicElement from "../DynamicElement";

export interface ActionIconProps {
	as?: string | AnyComponent;
	[key: string]: any;
}

const ActionIcon: FunctionComponent<ActionIconProps> = ({
	as = "button",
	...props
}) => {
	return (
		<DynamicElement
			as={as}
			{...props}
			class={`rounded-xl no-underline inline-flex w-auto shadow p-4 transform transition-all translate-0 duration-150 items-center !active:translate-y-1 hover:-translate-y-1 focus:-translate-y-1
				cursor-pointer
				shadow-md

				light:shadow-dark-500
				light:bg-light-200
				light:text-dark-500
				light:hover:text-teal-500
				light:hover:bg-light-100

				dark:shadow-dark-900
				dark:bg-dark-400
				dark:text-light-900
				dark:hover:text-teal-500
			${props.class ?? ""}`}
		/>
	);
};

export default ActionIcon;
