import NewItem from "./new-item";
export default function NewItemPage() {
    return(
        <main className="p-6 max-w-md mx-auto">
            <h1 className="font-bold text-2xl text-center mb-4">Add New Item</h1>
            <NewItem />
        </main>
    )
}
