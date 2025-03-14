import { ButtonPassThroughOptions } from "primereact/button";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { IconType } from "primereact/utils";

export interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled' | 'ref'> {
    /**
     * Value of the badge.
     */
    badge?: string | undefined;
    /**
     * Style class of the badge.
     */
    badgeClassName?: string | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Name of the icon or JSX.Element for icon.
     */
    icon?: IconType<ButtonProps> | undefined;
    /**
     * Add a textual class to the button without a background initially.
     * @defaultValue false
     */
    text?: boolean | undefined;
    /**
     * Add a circular border radius to the button.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
    /**
     * Add a shadow to indicate elevation.
     * @defaultValue false
     */
    raised?: boolean | undefined;
    /**
     * Add a border class without a background initially.
     * @defaultValue false
     */
    outlined?: boolean | undefined;
    /**
     * Add a link style to the button.
     * @defaultValue false
     */
    link?: boolean | undefined;
    /**
     * Defines the style of the button, valid values are "secondary", "success", "info", "warning", "danger", "help".
     */
    severity?: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | undefined;
    /**
     * Defines the size of the button, valid values are "small" and "large".
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Position of the icon, valid values are "left", "right", "top" and "bottom".
     * @defaultValue left
     */
    iconPos?: 'top' | 'bottom' | 'left' | 'right' | undefined;
    /**
     * Text of the button.
     */
    label?: string | undefined;
    /**
     * Display loading icon of the button
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Name of the loading icon or JSX.Element for loading icon.
     */
    loadingIcon?: IconType<ButtonProps> | undefined;
    /**
     * Add a plain textual class to the button without a background initially.
     * @defaultValue false
     */
    plain?: boolean | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * When present, it specifies that the element should be visible.
     * @defaultValue true
     */
    visible?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ButtonPassThroughOptions}
     */
    pt?: ButtonPassThroughOptions;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}