// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: E_l1hqcHcA
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicTestimonial.module.css"; // plasmic-import: E_l1hqcHcA/css

import image32RtBuhLfpe from "./images/image32.png"; // plasmic-import: RtBuhLfpe/picture

export type PlasmicTestimonial__VariantMembers = {
  noLink: "noLink";
};

export type PlasmicTestimonial__VariantsArgs = {
  noLink?: SingleBooleanChoiceArg<"noLink">;
};

type VariantPropType = keyof PlasmicTestimonial__VariantsArgs;
export const PlasmicTestimonial__VariantProps = new Array<VariantPropType>(
  "noLink"
);

export type PlasmicTestimonial__ArgsType = {
  quote?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
  company?: React.ReactNode;
  dest?: string | PageHref;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestimonial__ArgsType;
export const PlasmicTestimonial__ArgProps = new Array<ArgPropType>(
  "quote",
  "name",
  "title",
  "company",
  "dest",
  "children"
);

export type PlasmicTestimonial__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultTestimonialProps {
  quote?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
  company?: React.ReactNode;
  dest?: string | PageHref;
  children?: React.ReactNode;
  noLink?: SingleBooleanChoiceArg<"noLink">;
  className?: string;
}

function PlasmicTestimonial__RenderFunc(props: {
  variants: PlasmicTestimonial__VariantsArgs;
  args: PlasmicTestimonial__ArgsType;
  overrides: PlasmicTestimonial__OverridesType;
  dataFetches?: PlasmicTestimonial__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.a, projectcss.root_reset, sty.root, {
        [sty.root__noLink]: hasVariant(variants, "noLink", "noLink")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__mSr9Y)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "This product is amazing.",
          value: args.quote,
          className: classNames(sty.slotTargetQuote)
        })}
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.freeBox__h7NCt)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__cXRqA)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__u5YiU)}
                src={image32RtBuhLfpe}
              />
            ),

            value: args.children
          })}

          <div className={classNames(defaultcss.all, sty.freeBox__u6Jz3)}>
            <div
              className={classNames(defaultcss.all, sty.freeBox__sIeN, {
                [sty.freeBox__noLink__sIeN5TZr6]: hasVariant(
                  variants,
                  "noLink",
                  "noLink"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Jane Doe",
                value: args.name,
                className: classNames(sty.slotTargetName, {
                  [sty.slotTargetName__noLink]: hasVariant(
                    variants,
                    "noLink",
                    "noLink"
                  )
                })
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___7Mprr)}>
              {p.renderPlasmicSlot({
                defaultContents: "Product Designer",
                value: args.title,
                className: classNames(sty.slotTargetTitle)
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__nkMqq)}>
              {p.renderPlasmicSlot({
                defaultContents: "Some Company",
                value: args.company,
                className: classNames(sty.slotTargetCompany)
              })}
            </div>
          </div>
        </p.Stack>
      </div>
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
  PlasmicTestimonial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonial__VariantsArgs;
    args?: PlasmicTestimonial__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTestimonial__Fetches;
  } & Omit<PlasmicTestimonial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonial__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTestimonial__ArgProps,
      internalVariantPropNames: PlasmicTestimonial__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */
