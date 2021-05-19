const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    /*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/

    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'black',fontWeight:'bold'   }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
