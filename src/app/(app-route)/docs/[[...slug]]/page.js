export default function docs({ params }) {
    {
        if (params.slug?.length === 2) {
            return <h1>docs page rendered for {params.slug[0]} and concept {params.slug[1]}</h1>
        }
        else if (params.slug?.length === 1) {
            return <h1>docs page rendered for {params.slug[0]}</h1>
        }
        else {
            return <h1>docs page rendered</h1>
        }
    }

}