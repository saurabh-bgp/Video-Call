import React from 'react'
import './App.css';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
const Room = () => {
    const {roomID} = useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 939896039;
         const serverSecret = "6bb15c4f83fd3e660d81f5e8b3258110";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Saurabh");
         const zp = ZegoUIKitPrebuilt.create(kitToken);

         zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy link',
                url:
                 window.location.protocol + '//' + 
                 window.location.host + window.location.pathname +
                  '?roomID=' +
                  roomID,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    
    }
  return (
    <div className="App" ref={myMeeting}>
      room
    </div>
  )
}

export default Room
