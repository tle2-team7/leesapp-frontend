type TToolTipProps = {
  text: string;
  visible: boolean;
};

export default function ToolTipComponent(props: TToolTipProps) {
  return <p className="absolute bottom-24">{props.visible ? props.text : ""}</p>;
}
