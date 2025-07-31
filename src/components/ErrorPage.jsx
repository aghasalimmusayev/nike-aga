import React, { useEffect } from "react";
import "./error.css";

export default function ErrorPage() {

    // Typing effect funksiyası
    useEffect(() => {
        function type(n, t) {
            const codeElements = document.getElementsByTagName("code");
            if (!codeElements[n]) return;

            const str = codeElements[n].innerHTML.toString();
            let i = 0;
            codeElements[n].innerHTML = "";

            setTimeout(() => {
                const se = setInterval(() => {
                    i++;
                    codeElements[n].innerHTML = str.slice(0, i) + "|";
                    if (i === str.length) {
                        clearInterval(se);
                        codeElements[n].innerHTML = str;
                    }
                }, 10);
            }, t);
        }

        type(0, 0);
        type(1, 600);
        type(2, 1300);
    }, []);

    return (
        <div className="error-page">
            <p>
                HTTP: <span>404</span>
            </p>
            <code>
                <span>this_page</span>.<em>not_found</em> = true;
            </code>
            <code>
                <span>if</span> (<b>you_spelt_it_wrong</b>) {"{"}
                <span>try_again()</span>;
                {"}"}
            </code>
            <code>
                <span>else if (<b>we_screwed_up</b>)</span> {"{"}
                <em>alert</em>(
                <i>"We're really sorry about that."</i>); <span>window</span>.
                <em>location</em> = home;{"}"}
            </code>
            <center>
                <a href="/">HOME</a>
            </center>
        </div>
    );
}
