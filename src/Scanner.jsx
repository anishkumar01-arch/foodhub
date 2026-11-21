import { QRCode } from "react-qr-code";
function Scanner() {
  let finalAmount = 100000;
  return (
    <>
      <h1>Complete the payment of {finalAmount} To contnue the classes</h1>
      <QRCode
        value={`upi://pay?pa=8897895847@ybl&pn=AnishStore&am=${finalAmount.toFixed(2)}&cu=INR`}
      />
    </>
  );
}
export default Scanner;