import Spline from '@splinetool/react-spline/next';

export default async function Ai() {
  return (
    <main>
     {await Spline({scene: "https://prod.spline.design/X0nPXuw7E9SmtLwc/scene.splinecode"})}
    </main>
  );
}
