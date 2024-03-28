import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const HomeSkilledConnect = () => {
  const { roomId } = useParams();
  const myMeetingRef = useRef(null);

  useEffect(() => {
    const SkilledName = localStorage.getItem('SkilledName');
    if (SkilledName) {
      const appID = 1470061690;
      const serverSecret = "c5da366453ca9e38fa5431755fdd84e6";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), SkilledName);

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: myMeetingRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
      zp.on('leaveRoom', () => {
        console.log('Event handler triggered'); // Check if this logs
        alert('Video ended');
        console.log('Video ended');
    });
     
    }
  }, [roomId]);

  const meetingDivStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={meetingDivStyle} ref={myMeetingRef} />
  );
};

export default HomeSkilledConnect;
