type TToolTipProps = {
  text: string;
  visible: boolean;
};

export default function ToolTipComponent(props: TToolTipProps) {
  return <p className={`${props.visible ? "block" : "hidden"} arrowDown w-28 absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white p-2 text-black text-xs rounded-lg text-center`}>{props.text}</p>;
}
