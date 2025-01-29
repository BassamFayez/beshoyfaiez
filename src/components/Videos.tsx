const youtubeLinks = [
  "https://www.youtube.com/embed/scacLnfcM5E?si=2QoqwymkdysSEOn6",
  "https://www.youtube.com/embed/w729p-WIr88?si=HrtIM73mNwvrq6M_",
  "https://www.youtube.com/embed/JT-O3PhZ3Vk?si=Q0rk7hVYjykOrrSQ",
  "https://www.youtube.com/embed/7viAcKWTsUQ?si=u6GyXc6SQju9A829",
  "https://www.youtube.com/embed/oxIqDOu12i8?si=XoY5T3Kj8WnRKK0I",
  "https://www.youtube.com/embed/elgvfqN18r4?si=WHDoPhrIGgnRbnGF",
  // "https://www.youtube.com/embed/hK9rIaPzQaU?si=J1JuVo7O56P6QlN4",
];

export default function Videos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {youtubeLinks.map((item) => (
        <div key={item} className="rounded-lg overflow-hidden">
          <iframe
            src={item}
            title="YouTube video player"
            className="w-full h-[300px] "
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
