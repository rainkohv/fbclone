import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Rain Kohv",
    src: "https://kohv.info/assets/rain_kohv_story.png",
    profile: "https://kohv.info/assets/rain_kohv_pfp.png",
  },
  {
    name: "Eric Bugenhagen",
    src: "https://kohv.info/assets/eric_bugenhagen_story.png",
    profile: "https://kohv.info/assets/eric_bugenhagen_pfp.png",
  },
  {
    name: "Charles White",
    src: "https://kohv.info/assets/charles_white_story.png",
    profile: "https://kohv.info/assets/charles_white_pfp.png",
  },
];

function Stories() {
  return (
    <div className="flex justify-left space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
