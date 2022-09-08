import React  from 'react';
import { useNavigate } from "react-router-dom";

export default function LandingPageInfo() {
    return(
        <section className="info">
            <article className="info_description">
                <p>
                    <span className="info_logo">WiecznaCzystość</span> to nie tylko firma. To rodzinna inicjatywa podjęta żeby należycie zadbać o jak
                    największą ilość grobów, które niekiedy są niestety w bardzo złym stanie. Grób jest jedynym miejscem,
                    gdzie możemy przebywać poniekąd w obecności naszych ukochanych zmarłych. Czysty grób świadczy
                    natomiast o pamięci o tych, którzy byli bliscy naszemu sercu. W dzisiejszym świecie nie każdy ma
                    niestety czas lub możliwości aby upamiętniać bliskich troszcząc się o nagrobek. Z tego względu
                    stworzyliśmy naszą rodzinną firmę - aby ułatwić dbanie o groby bliskich tym wszystkim, którzy o nich
                    pamiętają i dalej darzą miłością lecz z różnych względów nie mogą należycie dbać o miejsce spoczynku
                    bliskich.
                </p>
            </article>
        </section>
    )
}