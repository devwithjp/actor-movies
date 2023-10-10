import React from "react";

export default function ActorGenreForm(props){
    const {handleSubmit,setActorName, setGenre, genre, actorName} = props;
    return(
    <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-4 flex-wrap justify-between items-end	">
        <div className="flex-1">
            <label htmlFor="actorName" className="block text-gray-700">Actor Name:</label>
            <input
            type="text"
            id="actorName"
            value={actorName}
            onChange={(e) => setActorName(e.target.value)}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div className="flex-1">
            <label htmlFor="genre" className="block text-gray-700">Genre:</label>
            <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
        <div >
            <button type="submit" className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">MOVIES</button>
        </div>
        </div>
    </form>)
}