
export default function SlowComponent5s() {

   const waitedData = await fetch('https://procodrr.vercel.app/?sleep=5000')
   const data = await waitedData.json();

  return (
    <div>
        { JSON.stringify(data)}
    </div>
  )
}
