import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Metal Gear']);

    const onAddCategory = (newCategory) => {
        if(!categories.includes(newCategory))
            setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            <ol>
                {categories.map(category => (
                    <GifGrid key={ category } category={category} />
                )) }
            </ol>
        </>
    )
}