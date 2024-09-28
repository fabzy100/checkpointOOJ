import { useState, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface Album {
    album_name: string;
    artist_name: string;
    best_song: string;
    release_year: number;
    album_Cover: string;
}

const AlbumComponent = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [counts, setCounts] = useState<number[]>([]);

    const fetchAlbums = async () => {
        try {
            const res = await fetch("http://localhost:1669/albums");
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();

            console.log("API Response:", data);

            if (Array.isArray(data)) {
                setAlbums(data);
                setCounts(new Array(data.length).fill(0)); // Initialize counts with zeros
            } else if (data.albums) {
                setAlbums(data.albums);
                setCounts(new Array(data.albums.length).fill(0)); // Initialize counts with zeros
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const increment = (index: number) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    const decrement = (index: number) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] > 0) {
                newCounts[index] -= 1;
            }
            return newCounts;
        });
    };

    const getTotalQuantity = () => {
        return counts.reduce((total, count) => total + count, 0);
    };

    return (
      <div>
        <h1 className="text-3xl font-bold flex justify-center">
          Total Quantity: {getTotalQuantity()}
        </h1>
        <div className="grid grid-cols-2 gap-4 p-4">
            {albums.map((item, index) => (
                <div key={item.album_name} className="bg-black text-white rounded shadow-md p-4">
                    <img src={item.album_Cover} alt={`${item.album_name} cover`} className="w-full h-auto rounded" />
                    <div className="mb-2">Album Name: {item.album_name}</div>
                    <div className="mb-2">Artist Name: {item.artist_name}</div>
                    <div className="mb-2">Best Song: {item.best_song}</div>
                    <div className="mb-2">Release Year: {item.release_year}</div>
                    <div className="flex justify-center gap-4">
                        <CiCirclePlus
                            className="text-3xl"
                            onClick={() => increment(index)}
                        />
                        <span>{counts[index]}</span>
                        <CiCircleMinus
                            className="text-3xl"
                            onClick={() => decrement(index)}
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
};

export default AlbumComponent;