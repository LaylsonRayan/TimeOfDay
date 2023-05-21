import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    carregar();
  }, []);

  function carregar() {
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    if (msg) {
      msg.innerHTML = `Agora são ${hora}:${minuto} horas`;
      if (hora >= 0 && hora < 12) {
        //Good Morning
        document.body.style.background = '#e2cd9f';
        msg.innerText = 'Bom dia!';
      } else if (hora >= 12 && hora <= 18) {
        //Good Afternoon
        document.body.style.background = '#b9846f';
        msg.innerText = 'Boa tarde!';
      } else {
        //Good Night
        document.body.style.background = '#515154';
        msg.innerText = 'Boa noite!';
      }
    }
  }

  return (
    <main>
      <section className="bg-white rounded-xl p-4 w-[500px] m-auto shadow-[5px_5px_10px_black]">
        <div id="msg" className="text-center p-2"></div>
        <div className="rounded-[50%] w-[150px] h-[150px]">
          <Image src="/fotomanha.png" alt="foto de manhã" width={150} height={150} />
        </div>
      </section>
      <footer className="text-white text-center italic">
        <p>&copy;Time of day</p>
      </footer>
    </main>
  );
}
