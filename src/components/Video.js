import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

function Video(props) {
  const HocDate = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe title={props.url} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <HocDate date={props.date} />
    </div>
  )
}

export default Video;
