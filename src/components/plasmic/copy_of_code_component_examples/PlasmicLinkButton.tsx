// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iX1qkSjgNN2uqWdAcYpiJf
// Component: 65vBthjiMfiU
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import {
  ThemeValue,
  useTheme
} from "../plasmic_kit_website_components/PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_code_component_examples.module.css"; // plasmic-import: iX1qkSjgNN2uqWdAcYpiJf/projectcss
import * as sty from "./PlasmicLinkButton.module.css"; // plasmic-import: 65vBthjiMfiU/css

import IconIcon from "../plasmic_kit_website_components/icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon

export type PlasmicLinkButton__VariantMembers = {
  type:
    | "iconOnly"
    | "white"
    | "purpleFlat"
    | "tealFlat"
    | "rightIcon"
    | "withShadow"
    | "purpleSolid"
    | "orangeFlat"
    | "pinkSolid"
    | "coralSolid"
    | "greenSolid"
    | "cyanSolid"
    | "purpleOutline";
};

export type PlasmicLinkButton__VariantsArgs = {
  type?: MultiChoiceArg<
    | "iconOnly"
    | "white"
    | "purpleFlat"
    | "tealFlat"
    | "rightIcon"
    | "withShadow"
    | "purpleSolid"
    | "orangeFlat"
    | "pinkSolid"
    | "coralSolid"
    | "greenSolid"
    | "cyanSolid"
    | "purpleOutline"
  >;
};

type VariantPropType = keyof PlasmicLinkButton__VariantsArgs;
export const PlasmicLinkButton__VariantProps = new Array<VariantPropType>(
  "type"
);

export type PlasmicLinkButton__ArgsType = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string | PageHref;
};

type ArgPropType = keyof PlasmicLinkButton__ArgsType;
export const PlasmicLinkButton__ArgProps = new Array<ArgPropType>(
  "label",
  "icon",
  "href"
);

export type PlasmicLinkButton__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultLinkButtonProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string | PageHref;
  type?: MultiChoiceArg<
    | "iconOnly"
    | "white"
    | "purpleFlat"
    | "tealFlat"
    | "rightIcon"
    | "withShadow"
    | "purpleSolid"
    | "orangeFlat"
    | "pinkSolid"
    | "coralSolid"
    | "greenSolid"
    | "cyanSolid"
    | "purpleOutline"
  >;
  className?: string;
}

function PlasmicLinkButton__RenderFunc(props: {
  variants: PlasmicLinkButton__VariantsArgs;
  args: PlasmicLinkButton__ArgsType;
  overrides: PlasmicLinkButton__OverridesType;
  dataFetches?: PlasmicLinkButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootFocusVisible, triggerRootFocusVisibleProps] = useTrigger(
    "useFocusVisible",
    {
      isTextInput: false
    }
  );

  const triggers = {
    focusVisible_root: isRootFocusVisible
  };

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.a, projectcss.root_reset, sty.root, {
        [sty.root_____focusVisible]: triggers.focusVisible_root,
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        ),
        [sty.root__type_coralSolid]: hasVariant(variants, "type", "coralSolid"),
        [sty.root__type_cyanSolid]: hasVariant(variants, "type", "cyanSolid"),
        [sty.root__type_greenSolid]: hasVariant(variants, "type", "greenSolid"),
        [sty.root__type_iconOnly]: hasVariant(variants, "type", "iconOnly"),
        [sty.root__type_orangeFlat]: hasVariant(variants, "type", "orangeFlat"),
        [sty.root__type_pinkSolid]: hasVariant(variants, "type", "pinkSolid"),
        [sty.root__type_purpleFlat]: hasVariant(variants, "type", "purpleFlat"),
        [sty.root__type_purpleOutline]: hasVariant(
          variants,
          "type",
          "purpleOutline"
        ),
        [sty.root__type_purpleOutline____focusVisible]:
          hasVariant(variants, "type", "purpleOutline") &&
          triggers.focusVisible_root,
        [sty.root__type_purpleSolid]: hasVariant(
          variants,
          "type",
          "purpleSolid"
        ),
        [sty.root__type_rightIcon]: hasVariant(variants, "type", "rightIcon"),
        [sty.root__type_tealFlat]: hasVariant(variants, "type", "tealFlat"),
        [sty.root__type_white]: hasVariant(variants, "type", "white"),
        [sty.root__type_withShadow]: hasVariant(variants, "type", "withShadow"),
        [sty.root__type_withShadow_type_orangeFlat]:
          hasVariant(variants, "type", "withShadow") &&
          hasVariant(variants, "type", "orangeFlat"),
        [sty.root__type_withShadow_type_tealFlat]:
          hasVariant(variants, "type", "withShadow") &&
          hasVariant(variants, "type", "tealFlat")
      })}
      href={args.href !== undefined ? args.href : ("#" as const)}
      data-plasmic-trigger-props={[triggerRootFocusVisibleProps]}
    >
      {(hasVariant(variants, "type", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Link",
            value: args.label,
            className: classNames(sty.slotTargetLabel, {
              [sty.slotTargetLabel__type_coralSolid]: hasVariant(
                variants,
                "type",
                "coralSolid"
              ),
              [sty.slotTargetLabel__type_cyanSolid]: hasVariant(
                variants,
                "type",
                "cyanSolid"
              ),
              [sty.slotTargetLabel__type_greenSolid]: hasVariant(
                variants,
                "type",
                "greenSolid"
              ),
              [sty.slotTargetLabel__type_iconOnly]: hasVariant(
                variants,
                "type",
                "iconOnly"
              ),
              [sty.slotTargetLabel__type_orangeFlat]: hasVariant(
                variants,
                "type",
                "orangeFlat"
              ),
              [sty.slotTargetLabel__type_pinkSolid]: hasVariant(
                variants,
                "type",
                "pinkSolid"
              ),
              [sty.slotTargetLabel__type_purpleFlat]: hasVariant(
                variants,
                "type",
                "purpleFlat"
              ),
              [sty.slotTargetLabel__type_purpleOutline]: hasVariant(
                variants,
                "type",
                "purpleOutline"
              ),
              [sty.slotTargetLabel__type_purpleSolid]: hasVariant(
                variants,
                "type",
                "purpleSolid"
              ),
              [sty.slotTargetLabel__type_tealFlat]: hasVariant(
                variants,
                "type",
                "tealFlat"
              ),
              [sty.slotTargetLabel__type_white]: hasVariant(
                variants,
                "type",
                "white"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "type", "rightIcon")
          ? true
          : hasVariant(variants, "type", "iconOnly")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__zu5Hg)}
                role={"img"}
              />
            ),

            value: args.icon,
            className: classNames(sty.slotTargetIcon, {
              [sty.slotTargetIcon__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),
              [sty.slotTargetIcon__type_iconOnly]: hasVariant(
                variants,
                "type",
                "iconOnly"
              ),
              [sty.slotTargetIcon__type_purpleOutline]: hasVariant(
                variants,
                "type",
                "purpleOutline"
              ),
              [sty.slotTargetIcon__type_rightIcon]: hasVariant(
                variants,
                "type",
                "rightIcon"
              )
            })
          })
        : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinkButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinkButton__VariantsArgs;
    args?: PlasmicLinkButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLinkButton__Fetches;
  } & Omit<PlasmicLinkButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLinkButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
