
export default  async function SlowComponent2s() {

   const waitedData = await fetch('https://procodrr.vercel.app/?sleep=2000')
   const data = await waitedData.json();

  return (
    <div>
        { JSON.stringify(data)}
    </div>
  )
}
