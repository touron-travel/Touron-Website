import React, { useContext, useEffect } from "react";
import Sidebar from "../Sidebar";
import { ApiContext } from "../../Context/ApiContext";
import { setAdminRoute } from "../utilities/AdminroutesCheck";
import { useLocation } from "react-router-dom";
const Advertisement = () => {
  const location = useLocation();
  const { setAdminRoutes } = useContext(ApiContext);

  useEffect(() => {
    let value = setAdminRoute(location.pathname);
    console.log("value :>> ", value);
    setAdminRoutes(value);
  }, []);
  return (
    <div className="dashboard-flex">
      <Sidebar />
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
        numquam nesciunt! Doloremque fuga mollitia modi delectus? Enim magni qui
        illo iusto quasi quis, quaerat quas impedit incidunt quae facere nemo
        non blanditiis? Est dolore pariatur, quis illum architecto ad voluptas
        obcaecati, reiciendis cupiditate, harum eligendi. Facere obcaecati
        labore accusamus culpa autem consectetur, unde tempora eveniet! In
        voluptatum atque similique non ex quibusdam eos, mollitia fuga
        temporibus commodi ipsa magnam architecto, dolores ad, maxime quas!
        Repellat ipsam officiis aspernatur, perspiciatis necessitatibus corporis
        voluptatibus perferendis. Expedita repellendus et ipsum, dolore tempora
        amet sapiente optio! Eveniet, deserunt ea. Ad totam ducimus, nam dolorem
        libero nobis vel odit porro, iusto nisi veritatis tempore itaque numquam
        iure aperiam rem? Iusto necessitatibus numquam quae iure voluptas,
        ratione saepe nobis nemo. Eligendi eveniet accusantium explicabo ipsum
        commodi. Beatae, expedita. Ea laudantium blanditiis nobis vero,
        doloremque, eligendi veniam quibusdam incidunt, eveniet voluptatibus
        laborum? Ipsa facere sed libero id laudantium rerum atque quod
        temporibus iusto sit accusamus odit praesentium perferendis culpa nobis,
        fugiat numquam iure hic fuga autem corrupti eaque sapiente. Ut magnam
        cum obcaecati tenetur repudiandae soluta quisquam quaerat maiores quis
        perspiciatis? Autem deserunt nihil totam harum doloribus aspernatur
        tempora, qui ullam, dignissimos perspiciatis dicta repellat quidem
        molestias fugit officiis tempore magnam quia saepe ipsum error iste
        vitae vel debitis suscipit? Reprehenderit, inventore unde, debitis
        explicabo, neque ea ratione nemo tempore iste reiciendis odio? Nemo,
        dolorum reprehenderit sunt culpa et ipsum repellendus commodi
        consequuntur at, voluptate nostrum libero quia quidem obcaecati autem,
        rerum distinctio architecto ad? Atque quia, ducimus odit qui, facere
        iste minima nobis, totam debitis est labore? Quos itaque maiores
        reprehenderit, id consectetur, harum ab veniam earum, ex dolor quae
        nostrum enim impedit placeat illo ut nihil alias laboriosam vitae sint
        assumenda dolores! Nisi, porro. Dolor nostrum eveniet omnis fugit quae
        corporis dicta doloribus nisi sunt in reiciendis magni adipisci saepe
        tempore vitae totam delectus quas blanditiis dolorum nesciunt assumenda
        aliquid maiores, nihil earum? Dolores quo perferendis, libero, assumenda
        nostrum voluptas ex, alias id esse accusantium placeat. Reiciendis velit
        quis fuga. Vero suscipit mollitia praesentium iusto nemo quasi natus
        ullam, ducimus libero exercitationem ipsa dicta cumque tempore provident
        quod fugit quisquam! Animi adipisci, explicabo consectetur sapiente,
        voluptatum ullam officiis inventore deleniti omnis nemo non? Minus
        facilis libero reiciendis dolore provident iure quibusdam rem corporis
        itaque dolores necessitatibus, repellendus sunt odit quia doloremque!
        Officiis reiciendis labore aspernatur fugiat voluptas tenetur
        perspiciatis adipisci recusandae nesciunt voluptatum aperiam minus
        aliquam aut mollitia, deserunt culpa odit explicabo illum voluptate vero
        iusto ipsa corporis odio. Excepturi voluptates ea veniam quae animi
        incidunt harum sed tempore quis maiores! Asperiores maxime atque
        quisquam sapiente, sunt ea minima esse quidem fugit. Soluta voluptates
        et minus, quod mollitia eius saepe cum ullam deserunt expedita. Debitis
        fugit placeat sapiente dolores maiores natus id, magnam accusamus ipsam,
        cumque ullam voluptatibus fugiat voluptates maxime rerum quos nemo unde
        dolorem laborum nulla vitae voluptas. Ipsum sunt dolores expedita
        inventore tempora illo. Cupiditate reprehenderit pariatur, nam corrupti
        magni fugiat? Blanditiis libero at ducimus, assumenda itaque beatae fuga
        dolor, eum mollitia quaerat delectus perferendis placeat, vel omnis
        accusantium suscipit asperiores veritatis tenetur rem? Sed nostrum odit
        labore iusto. Assumenda hic nesciunt nisi eligendi, quaerat deserunt
        quasi. Saepe molestiae amet magni doloribus voluptatum facere soluta
        consectetur. Ea accusantium eaque et repudiandae praesentium debitis
        alias nostrum hic fuga ad explicabo nam pariatur illum velit qui unde
        in, incidunt quod dignissimos. In omnis aut ipsa est sed, amet tempora
        molestiae repudiandae saepe magnam? Exercitationem ut quas repudiandae
        officiis illo assumenda non est voluptate facere excepturi, accusantium
        tenetur quis! Porro quaerat, odit labore blanditiis earum, natus ullam
        debitis voluptatem exercitationem sint accusamus est. Dolore veritatis
        veniam consequuntur rem id sunt saepe inventore nobis, nisi praesentium
        sit quos quod eaque ea enim vero itaque, recusandae nulla quo impedit
        ducimus aperiam! Mollitia soluta quod doloribus blanditiis repellendus!
        Quis magni itaque officiis voluptatum ullam, eveniet molestias ipsum,
        libero nihil repudiandae rerum aut nulla quaerat accusamus, sunt amet
        at. Ex repellendus minus soluta repudiandae, numquam, nulla eveniet
        recusandae ipsa, eligendi nihil provident facere hic odit a! Est quas
        nostrum maxime dolores voluptas ipsa omnis tenetur odit, commodi amet
        ducimus quis quisquam neque ipsum fugit facere corporis atque cum cumque
        sapiente a nobis reprehenderit eligendi inventore? Enim corrupti itaque,
        necessitatibus dolore facere impedit nisi distinctio in iusto suscipit
        inventore ab! Vitae earum reprehenderit harum, quod fuga doloribus
        tempora nisi hic vero ex, pariatur similique veritatis assumenda iusto
        nihil laudantium sit molestiae voluptas illum consequatur excepturi
        laboriosam. Recusandae architecto consequatur minima sequi dolores.
        Ullam dolore deleniti accusamus, quod fugiat amet provident distinctio
        soluta quibusdam nobis labore cupiditate perferendis natus hic earum,
        non blanditiis cum laboriosam! Facere eveniet dolores modi molestiae
        aperiam corrupti dolorum libero illo aut. Possimus dolore minus
        quibusdam, quae soluta corporis laborum natus voluptatibus magnam odio
        sit quas harum debitis omnis explicabo animi, ex perspiciatis totam
        necessitatibus dicta cum? Ipsum recusandae corrupti veritatis aspernatur
        quos a, commodi perferendis sequi architecto id mollitia ratione
        facilis. Itaque natus autem exercitationem dolores repudiandae tenetur?
        Modi iusto sint velit ipsum hic eos beatae enim illo asperiores, nulla
        vero ut fuga aspernatur laborum unde qui cumque iure. Sequi officia
        laboriosam numquam voluptate aperiam laborum facilis est provident
        impedit alias doloremque itaque odit ut sint repudiandae amet cupiditate
        blanditiis cumque, eaque explicabo, quas culpa ratione ipsa. Cumque
        asperiores officiis quam itaque nam at nulla dolor molestiae atque harum
        quia soluta, ad sequi impedit illo odio sed praesentium exercitationem
        non pariatur voluptatibus assumenda nostrum numquam qui. Odit iure
        facilis expedita magni maiores sunt sapiente officiis quasi enim ullam!
        Deserunt tenetur sequi et minima id distinctio impedit dolore, tempore
        adipisci perferendis dolorum, ipsa commodi voluptate ullam debitis totam
        voluptatum libero natus! Aliquid sapiente at provident consequatur in
        cum quo qui asperiores ad eos, atque nihil officia, cupiditate aperiam
        repellendus neque. Nam impedit repellendus qui ullam magni at deserunt
        distinctio consectetur eius minus numquam mollitia magnam, beatae modi
        commodi non nemo dolorem quod fugiat iste architecto. Sequi, minus
        quisquam? Deleniti rerum, odit soluta incidunt totam numquam, sit
        aliquid vitae quidem asperiores, non aliquam temporibus delectus dicta
        cupiditate labore.
      </h1>
    </div>
  );
};

export default Advertisement;
