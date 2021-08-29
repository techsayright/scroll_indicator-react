import React, { useState } from "react";
import styles from "./Scroll.module.scss";

export const ScrollIndicator = () => {
  const [scroll, setScroll] = useState("");

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScroll(scrolled);
  };
  
  window.addEventListener("scroll", onScroll);

  return (
    <>
      <div className={styles.navBar}>
        <h1>Scroll Indicator</h1>
        <div className={styles.scroll}>
          <div
            className={styles.innerScroll}
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
      </div>
      <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          velit officiis laborum asperiores, pariatur beatae sequi non eos
          tempora veritatis laudantium enim repudiandae ducimus neque sapiente
          quia exercitationem dolorem natus. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Saepe quidem asperiores nisi. Sit
          eligendi error sapiente facilis sed odio dolorem quas rem laudantium
          natus labore quidem consequuntur, aspernatur eum aliquam, a sequi?
          Dolorem quisquam nisi rem ex vitae excepturi voluptate? Aliquam, quam
          facilis provident earum dolores labore quia molestiae rem unde sit
          repudiandae veritatis quisquam placeat, reiciendis, quis mollitia eos
          omnis laboriosam sint exercitationem laudantium doloremque. Voluptatum
          nam rerum quibusdam. Voluptatibus laborum voluptate accusamus
          reprehenderit, possimus unde dolore vitae at nesciunt quos assumenda
          quisquam velit tenetur voluptatum dolores eius nisi cumque placeat
          ratione numquam laudantium et quibusdam ullam in. Odit excepturi velit
          id sapiente earum sint voluptates totam recusandae molestias dolorum
          ad laudantium repudiandae, repellendus vero quia modi aut, optio
          error, illo aspernatur. Perferendis minima eum recusandae atque ad
          assumenda, similique voluptatibus quam iste accusantium, quos aliquid
          in deleniti beatae nesciunt natus? At voluptatem explicabo praesentium
          voluptatibus veritatis libero esse recusandae animi vero temporibus.
          Magni, earum rerum. Quibusdam odit necessitatibus corporis consectetur
          tempore quod dolores hic pariatur amet deserunt magni laborum minus
          aut exercitationem quos ratione ea, ducimus temporibus ipsa! Eos ab
          laborum est qui excepturi neque, tempore adipisci tempora assumenda
          vitae maxime modi facilis beatae molestiae dignissimos inventore
          quaerat temporibus aliquam architecto. Quae fuga sapiente quam maxime
          cumque iusto explicabo delectus. Quia, perferendis atque? Asperiores
          harum ullam autem dolorem, nemo commodi inventore nam quas dignissimos
          ea, reprehenderit et culpa modi provident doloribus! Ex adipisci,
          minima animi dolore explicabo harum accusantium asperiores cupiditate
          earum nesciunt eos temporibus deleniti et nihil eius, dolorum itaque
          praesentium! Accusamus nemo magnam possimus, voluptates quos aperiam
          error recusandae, quas assumenda vero praesentium molestias fuga
          nostrum non quis iste, aliquid sed reiciendis perspiciatis? Error iure
          numquam, voluptas animi harum itaque distinctio libero dicta
          praesentium fuga quae veniam quibusdam atque minus cum nobis quisquam
          deserunt odit vel?
      </div>
    </>
  );
};
