var a = document.querySelector("#fact")
        var author = document.querySelector("#author")
        var btn = document.querySelector("#btn")
        btn.addEventListener("click", () => {
            btn.innerText = "Next"
            data()
            gsap.from("#fact", {
                y: 100,
                delay: 0.5,
                opacity: 0


            })
            gsap.from("#author", {
                y: 100,
                duration: 1,
                delay: 1,
                opacity: 0


            })

            btn.style.height="50px"
        })
       
        var i = 0;
        const URL = "https://dummyjson.com/quotes"
        const data = async () => {
            let fact = await fetch(URL)
            console.log(fact)
            let get = await fact.json()
            a.innerText = get.quotes[i].quote
            author.innerText = "--"+" "+get.quotes[i].author
            author.style.fontWeight="lighter";
            i = i + 1;
            
        }