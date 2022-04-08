import { randomQuote } from "quotegarden";

export default {
    name: 'Quote',
    data: function () {
        return {
            isLoading: false,
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam eligendi, unde voluptate fuga doloremque quia vitae excepturi ab assumenda a dolores error optio obcaecati alias, nesciunt iste saepe dolor.",
            author: "Diego Aravena",
            category: "Informatica"
        }
    },
    methods: {
        getQuote: function () {
            this.isLoading = true;
            randomQuote()
                .then(({ data }) => {
                    const { quoteAuthor, quoteGenre, quoteText } = data[0]
                    console.log(quoteAuthor, quoteGenre, quoteText)
                    this.quote = quoteText;
                    this.author = quoteAuthor;
                    this.category = quoteGenre;
                    this.isLoading = false;
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getQuote();
    }
}

