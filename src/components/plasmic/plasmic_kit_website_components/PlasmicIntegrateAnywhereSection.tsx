// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: dxALvsaixcT
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
import ValuePropSection from "../../ValuePropSection"; // plasmic-import: 6Zq5_xjO9F/component
import SmallValuePropCard from "../../SmallValuePropCard"; // plasmic-import: ZsmzGgkZw2/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import Linky from "../../Linky"; // plasmic-import: EDH0JqEGKc/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k7xdGnvUtPZ_s/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicIntegrateAnywhereSection.module.css"; // plasmic-import: dxALvsaixcT/css

import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: YhhYiXTtXT/icon
import Icon32Icon from "./icons/PlasmicIcon__Icon32"; // plasmic-import: V9OFkmlcnz/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7p8MViVJAB/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: Qm3zx5PVC/icon
import image7RU1GD3ENw from "./images/image7.svg"; // plasmic-import: rU1g-d3eNw/picture

export type PlasmicIntegrateAnywhereSection__VariantMembers = {
  hideModes: "hideModes";
};

export type PlasmicIntegrateAnywhereSection__VariantsArgs = {
  hideModes?: SingleBooleanChoiceArg<"hideModes">;
};

type VariantPropType = keyof PlasmicIntegrateAnywhereSection__VariantsArgs;
export const PlasmicIntegrateAnywhereSection__VariantProps =
  new Array<VariantPropType>("hideModes");

export type PlasmicIntegrateAnywhereSection__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIntegrateAnywhereSection__ArgsType;
export const PlasmicIntegrateAnywhereSection__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicIntegrateAnywhereSection__OverridesType = {
  root?: p.Flex<typeof ValuePropSection>;
  img?: p.Flex<"img">;
};

export interface DefaultIntegrateAnywhereSectionProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  hideModes?: SingleBooleanChoiceArg<"hideModes">;
  className?: string;
}

function PlasmicIntegrateAnywhereSection__RenderFunc(props: {
  variants: PlasmicIntegrateAnywhereSection__VariantsArgs;
  args: PlasmicIntegrateAnywhereSection__ArgsType;
  overrides: PlasmicIntegrateAnywhereSection__OverridesType;
  dataFetches?: PlasmicIntegrateAnywhereSection__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariants()
  });

  return (
    <ValuePropSection
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      actionButton={null}
      backgroundColor={"blue2" as const}
      backgroundImage={
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          src={image7RU1GD3ENw}
        />
      }
      className={classNames("__wab_instance", sty.root, {
        [sty.root__hideModes]: hasVariant(variants, "hideModes", "hideModes")
      })}
      description={null}
      extraSlot={
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__wmfmL)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__b1B5L, {
              [sty.freeBox__hideModes__b1B5L8QqyZ]: hasVariant(
                variants,
                "hideModes",
                "hideModes"
              )
            })}
          >
            <SmallValuePropCard
              actionButton={null}
              className={classNames(
                "__wab_instance",
                sty.smallValuePropCard___5OEq2
              )}
              description={
                "JAMstack sites, ecommerce stores, mobile PWAs—bring Plasmic to any app."
              }
              followupLink={
                false ? (
                  <Linky
                    className={classNames("__wab_instance", sty.linky__rrxnW)}
                    link={
                      "https://studio.plasmic.app/?starters=general,site-builder" as const
                    }
                    style={["noPadding"]}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__npbY
                      )}
                    >
                      {"Browse starter projects ->"}
                    </div>
                  </Linky>
                ) : null
              }
              icon={
                <GraphicIcon
                  className={classNames(
                    "__wab_instance",
                    sty.graphicIcon__aESkc
                  )}
                  colors={"lightPurpleSolid" as const}
                >
                  <Icon20Icon
                    className={classNames(defaultcss.all, sty.svg__yIpf5)}
                    role={"img"}
                  />
                </GraphicIcon>
              }
              ltr={
                hasVariant(globalVariants, "screen", "mobilePortrait")
                  ? ("ltr" as const)
                  : undefined
              }
              showcaseImage={null}
            >
              {"The universal builder."}
            </SmallValuePropCard>

            <SmallValuePropCard
              actionButton={null}
              className={classNames(
                "__wab_instance",
                sty.smallValuePropCard__w9JMy,
                {
                  [sty.smallValuePropCard__hideModes__w9JMy8QqyZ]: hasVariant(
                    variants,
                    "hideModes",
                    "hideModes"
                  )
                }
              )}
              description={p.renderPlasmicSlot({
                defaultContents:
                  "Freedom to pick any hosting, CMS, framework, analytics—the full stack.",
                value: args.children
              })}
              followupLink={
                false ? (
                  <Linky
                    className={classNames("__wab_instance", sty.linky___36ZV)}
                    link={
                      "https://studio.plasmic.app/?starters=general,site-builder" as const
                    }
                    style={["noPadding"]}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__mKKz0
                      )}
                    >
                      {"Browse starter projects ->"}
                    </div>
                  </Linky>
                ) : null
              }
              icon={
                <GraphicIcon
                  className={classNames(
                    "__wab_instance",
                    sty.graphicIcon__kyAlF
                  )}
                  colors={"lightPurpleSolid" as const}
                >
                  <Icon32Icon
                    className={classNames(defaultcss.all, sty.svg__hfGeZ)}
                    role={"img"}
                  />
                </GraphicIcon>
              }
              ltr={
                hasVariant(globalVariants, "screen", "mobilePortrait")
                  ? ("ltr" as const)
                  : undefined
              }
              showcaseImage={null}
            >
              {"Works seamlessly with your stack."}
            </SmallValuePropCard>

            <SmallValuePropCard
              actionButton={null}
              className={classNames(
                "__wab_instance",
                sty.smallValuePropCard__cDi7
              )}
              description={
                "Start with a single component, section, or page. Simply import and render from your code."
              }
              followupLink={
                false ? (
                  <Linky
                    className={classNames("__wab_instance", sty.linky__mqtUf)}
                    link={
                      "https://studio.plasmic.app/?starters=general,site-builder" as const
                    }
                    style={["noPadding"]}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__jx66M
                      )}
                    >
                      {"Browse starter projects ->"}
                    </div>
                  </Linky>
                ) : null
              }
              icon={
                <GraphicIcon
                  className={classNames(
                    "__wab_instance",
                    sty.graphicIcon__oDdo2
                  )}
                  colors={"lightPurpleSolid" as const}
                >
                  <Icon6Icon
                    className={classNames(defaultcss.all, sty.svg__dGIjq)}
                    role={"img"}
                  />
                </GraphicIcon>
              }
              ltr={
                hasVariant(globalVariants, "screen", "mobilePortrait")
                  ? ("ltr" as const)
                  : undefined
              }
              showcaseImage={null}
            >
              {"Adopt incrementally."}
            </SmallValuePropCard>

            {(hasVariant(variants, "hideModes", "hideModes") ? false : true) ? (
              <SmallValuePropCard
                actionButton={null}
                className={classNames(
                  "__wab_instance",
                  sty.smallValuePropCard__piE6Y,
                  {
                    [sty.smallValuePropCard__hideModes__piE6Y8QqyZ]: hasVariant(
                      variants,
                      "hideModes",
                      "hideModes"
                    )
                  }
                )}
                description={p.renderPlasmicSlot({
                  defaultContents:
                    "Generate React code, or load content over an API to use Plasmic as a visual CMS.",
                  value: args.slot
                })}
                followupLink={
                  false ? (
                    <Linky
                      className={classNames("__wab_instance", sty.linky__hCj1)}
                      link={
                        "https://studio.plasmic.app/?starters=general,site-builder" as const
                      }
                      style={["noPadding"]}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__ssfvJ
                        )}
                      >
                        {"Browse starter projects ->"}
                      </div>
                    </Linky>
                  ) : null
                }
                icon={
                  <GraphicIcon
                    className={classNames(
                      "__wab_instance",
                      sty.graphicIcon__wjgud
                    )}
                    colors={"lightPurpleSolid" as const}
                  >
                    <Icon24Icon
                      className={classNames(defaultcss.all, sty.svg__eqwi9)}
                      role={"img"}
                    />
                  </GraphicIcon>
                }
                ltr={
                  hasVariant(globalVariants, "screen", "mobilePortrait")
                    ? ("ltr" as const)
                    : undefined
                }
                showcaseImage={null}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Flexible integration modes.",
                  value: args.slot2
                })}
              </SmallValuePropCard>
            ) : null}
          </p.Stack>
        </p.Stack>
      }
      extras={["withExtraSlot1", "centerAligned", "withExtraSlot2"]}
      header={null}
      icon={null}
      slot62={null}
      title={
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__dq3FL,
            {
              [sty.text__global_theme_altHeadlineFont__dq3FLfQkvX]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              ),
              [sty.text__hideModes__dq3FL8QqyZ]: hasVariant(
                variants,
                "hideModes",
                "hideModes"
              )
            }
          )}
        >
          {"Integrate and deploy anywhere."}
        </div>
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof ValuePropSection;
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIntegrateAnywhereSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIntegrateAnywhereSection__VariantsArgs;
    args?: PlasmicIntegrateAnywhereSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicIntegrateAnywhereSection__Fetches;
  } & Omit<PlasmicIntegrateAnywhereSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIntegrateAnywhereSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIntegrateAnywhereSection__ArgProps,
      internalVariantPropNames: PlasmicIntegrateAnywhereSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicIntegrateAnywhereSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIntegrateAnywhereSection";
  } else {
    func.displayName = `PlasmicIntegrateAnywhereSection.${nodeName}`;
  }
  return func;
}

export const PlasmicIntegrateAnywhereSection = Object.assign(
  // Top-level PlasmicIntegrateAnywhereSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicIntegrateAnywhereSection
    internalVariantProps: PlasmicIntegrateAnywhereSection__VariantProps,
    internalArgProps: PlasmicIntegrateAnywhereSection__ArgProps
  }
);

export default PlasmicIntegrateAnywhereSection;
/* prettier-ignore-end */
