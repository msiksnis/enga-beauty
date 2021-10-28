import{jsx as _jsx}from"react/jsx-runtime";// Generated by Framer (139ab31)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{Image as Image1,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"N1dp5TuX6":{"hover":true}};const cycleOrder=["N1dp5TuX6"];const variantClassNames={"N1dp5TuX6":"framer-v-17ntzx5"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="N1dp5TuX6",image:Jpz3XzLaZ=new URL("assets/2048/qpcS3p61ALhCtGc7Jo3sOTzM.jpg",import.meta.url).href,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"N1dp5TuX6",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-Xijjp",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsx(Image1,{...restProps,layoutId:"N1dp5TuX6",className:cx("framer-17ntzx5",className),style:{"opacity":0.7,...style},background:{"src":Jpz3XzLaZ,"pixelWidth":6048,"pixelHeight":4024,"intrinsicWidth":6048,"intrinsicHeight":4024,"fit":"fill"},"data-framer-name":"Variant 1",transition:transition,ref:ref,...addVariantProps("N1dp5TuX6"),variants:{"N1dp5TuX6-hover":{"opacity":1}}})})}));});const css=[".framer-Xijjp [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-Xijjp * { box-sizing: border-box; }",".framer-Xijjp .framer-17ntzx5 { position: relative; overflow: hidden; width: 1500px; height: 500px; }",".framer-Xijjp.framer-v-17ntzx5 .framer-17ntzx5 { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 500
 * @framerIntrinsicWidth 1500
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "gFjZz159y": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"Jpz3XzLaZ": "image"}
 */ const FramerGgn3dUKRv=withCSS(Component,css);export default FramerGgn3dUKRv;FramerGgn3dUKRv.displayName="TestCard";FramerGgn3dUKRv.defaultProps={"width":1500,"height":500};addPropertyControls(FramerGgn3dUKRv,{"Jpz3XzLaZ":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,qpcS3p61ALhCtGc7Jo3sOTzM.jpg?originalFilename=unknown.jpg"}});addFonts(FramerGgn3dUKRv,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerGgn3dUKRv","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicWidth":"1500","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"gFjZz159y\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerVariables":"{\"Jpz3XzLaZ\": \"image\"}","framerIntrinsicHeight":"500"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Ggn3dUKRv.map