import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';
import { homeVideo } from "../../utiles/HomeMockdata"; // Assuming homeVideo is the mock data

const HomePage = ({ sideNavbar }) => {
  const options = [
    "All", "HTML", "CSS", "JavaScript", "Vue.js", "React,js", 
    "Node.js", "HTML", "CSS", "JavaScript", "Vue.js", "React,js", 
    "Node.js",
  ];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      <div className="homePage_options">
        {options.map((item, index) => (
          <div key={index} className="homePage_option">
            {item}
          </div>
        ))}
      </div>

      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
        {homeVideo.map((video,index) => (
          <Link key={index} to={`/watch/${video.videoId}`}>
            <div className="youtube_Video">
              <div className="youtube_thumbnailBox">
                <img 
                  src={video.thumbnailUrl} 
                  alt="YouTube Thumbnail" 
                  className="youtube_thumbnailPic" 
                />
                <div className="youtube_timingThumbnail">{video.timing || '00:00'}</div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtubeTitleBoxProfile">
                  <img 
                    src={video.uploaderProfileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s"} 
                    alt="User Profile" 
                    className="youtube_thumbnail_Profile"
                  />
                </div>
                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">{video.title}</div>
                  <div className="youtube_channelName">{video.uploader}'s Channel</div>
                  <div className="youtubeVideo_views">{video.views} views</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
