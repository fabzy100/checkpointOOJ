import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface Album {
  album_name: string;
  artist_name: string;
  best_song: string;
  release_year: number;
  album_Cover: string;
}

const AlbumCard = () => {
  const albums: Album[] = [
    {
      album_name: "OLAMIDE",
      artist_name: "BADDO",
      best_song: "DUROSOKE",
      release_year: 2013,
      album_Cover: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRUVFhUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0gHiUtLS0tLS0tLS0tNy0tLS0tNy8tMistNi0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0rLf/AABEIAOoA1wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwEEAAUGBwj/xAA/EAACAQIEAggDBgUDAwUAAAABAgADEQQSITEFQQYTIlFhcZGxgaHBByMyQtHwFFJicuGissIkgpIVM1Nzs//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAwADAQACAwEAAAAAAAABAgMREiExQSJRBGGBMv/aAAwDAQACEQMRAD8A8fENR7SFENZzWuuDUSYQGkwCZ9aHDlLCDWJUbS1THvKVpI6jgQ+5X+5x7GbXho++p/3D2mr4APuB4VG/2rNxgVtVp/3D3mMv841s/hXcqsnLGouknLPWeOTlmZY3JMywE5ZGWOyyCsBJWCVjysErArlYJWPKwSskVmWLZZZKwGWBWZYpllplimWBWZYDCPYRbCQK7CLYSwwi2ECswmRjCRA8XWEokJDE5bXbDVGkwCGg0Ei2sz604cBLaD3lZZbT6zOrx03RsXot4VD7LNzhl+8pn+se4mo6MD7px/UT/pH6Td4cdtP7l91mHf5xtz+Fd8i6SSsYi6SbT2XilZZBWMEB6ighSRc3sL66eEASIJWOIgkQElYJEcRBIgJIgERxEAiAkiLYR5EBhArssUwlkiKZYFdhFMJZYRTCBXYRTCWGEUwgV2EyGwkwPEUhqIKCGN/jOOu6H09pHOHS2kHeZtFhJZp7ekrU5aQaekpV46fotrTqD+r3U/pN3QNspPIqfmJpOih7FTwZPZ/0lLpJxvIKa02BzA5tdCo5X9Znjhc8+RplnMMLa9XxvSPDUAueovaHZCkHNpcAG9teV55/xLp9UpYssmV6VsujHtrckEj8ji9p5otYjQ305bxgrjznszF4ruqPT6ouL66zGmRZkzcrabaXHI2hcN6WX4i1eoT1T5lFz+FQGyHwHhOApvz2/WH1ovrrLeKOvYcB9olJ7J1bs7NlpqosXuSATc9kWtv3zsMLiMwswyuACy3DWvtqJ860MTkZWUlWBuCORHPznVdGemFWjUbP2usK6sbW5XJPLX5StxT17MRBIlXhWOFamKoPZbVRzy8v34y6RKpJIgERzCLMBREAiNMAiAlhFsI8iLYQK7CKYSywimECswi2EsMIlhArsJkNhMgeHLDH1i0jB9Zx13xZpbfGCd4dLaC28yjQ+mNJap7fCVqMs0tvhK5Lx0XRfVK4G/Yt6POCrfysbFSdPHnbu2ne9Ej/AO8PBPdpy/H+FFqzvTF1LGwHzPlvNf8AFzkysrL/ACsLcZY0wsdzc90NHA5WPrGJgaxOlNvSFWwNVey9JtO8HnPQmU/t59xv9FAE87je23vCG2wHvMqYZwMxFteenygOt99P08ZeXqvDC4v2YVxoS2/7MAEEe4Hl3QVAsbwq9J6HdMGuVqkuTZaa9lVA0B15nQcu+em0HawLaE8u7uE+eOC4t6Vem1LcMLCxa57soIPwBn0DgS5pqamXMRc5QQPQ7TPKcq0W2i2hKbyDISWYJhGQYCzFsI0wCICWEUwj2EWwgV3EUwj2EUwgIYTITCRA8JEYv1ioxfrOOu+LdLnBfeFT5yH3mU+tfw+jLNLnKtCMrYgU1LEEjTbx0lOW3kW7JO1vuDVsi1yNPuxbzLWH+6XsAonL8Kx3WsyWygqCDe4axBte2400nUYFTYS1wuP36Y5zL3PjqeD0lvsBNticBScXKr5znuHKym/fb4fvSbHHY8hbX195phlyK549rlOmvD6KpdAATcX11IAt8f1E82N9tfG87TpNiKzXy3IHiL+NpxTk/vvnXqvY4d85kns6Cx8bfveHe3teK6zlqPHeSANLEk+83lc59Oob3BtqOU9/6JYzrcJRYkE5Be2wNtvHznz2Dflby3nu/QKi6YOmrU8lhz/NfXN85XNMdIm8xoI3ktKpAZBkmRAAwTDMAwAaKaNMW0BLCKcR7RTwK7CZCYTIHgZhoYuEhnJXfF5D7SKp1mKYNfeYz61/FigY2tRDoynmP8iIw5+ktIfaUt5exeSWcrlUqPTbQlSDY27xN3gOllenobG3Mj3EPGcFas4NL8bWup2J0F78pa6X9EKmFWlUBLKVCk/1qNviNvK3Kd0zw2SdcFw2a7bPje8B6csxtUKgeVtPj+s3GL6TYR9A7Mx0CoruT5WE8joPZh6TuujvBK7r2cRUpoxBbIzU7+ZU3IkZasJ9Ww27L8WMd0gw6XQ0aobmHUIdddQxuNLcpxuMILFgCATcAz0c8Dw+H/CA7c2btN85zPSTBXOcekjXnhMuSLbdezLHuVc1RpM5yqpPlqZYx/DmpFc35gf5gQRupvz1nQ9HOCB3FibrqQLg202bkd4np8SjUkJuQrFu8/hUE+ZVvSaTb3OYxndHNdyv1z2DDs6qu9xbQnn3T6M4JRqJQRar52sNQoUbaC0+d+E8VqYd1qplzL+G6hhrpqDvO04T9p+MLjrBTqL+YZcpI8CDoZrZ1zPYBvJMTgsSlRFqIbq6hlPgRcRxkJCYMIwYEGAYRgmAJi2jDAaApopo5opoCGkzGkwPn6TTkCYk5neuqdpNbeCsmtMP1r+G4Y/SWaZlSidZaSZ5fV8VzD4jq+2DYqt18WuLD47TpcNxnEV0NKvh1qqQTZWOdNrNY6HW/lNBwqnmdRpexIzDMLqLi45jSXsLiayfeLRZSDY5DmRgDrpe6n1ltUlnP1GfZ7/FFuhqdaCSyG6sVJvvr7zqutFFAl9iu3gwP0mqr8bWtYEFKo5MCMwPdKuJxzc5fLyv1XHwnfFdx3EDuZoOIYw8/KY2Izm5NgNfrNJjMRmbw2mmvX7Z7dnr07Po50k/hkrWpB/u7jMLjtMlO2+jDMGB12Ok5Pi7vWZqlQ3Zjc+HcB3ATa8I4h1dGvS6pHNcU1zt+Kn1b57p56X8hFnB38zJ8pjUeNyl65RwNjLPDdGJG1t5tOJYKiNLnrB/LY/BuX1lUUso01752YXynXDnj43j0zof0xp06NOhVQqEFhUU5gbkntLuN+V53mBxlOquam6uvepv8D3HwM+fKQNpsuE8Vq4dxUpPlI35hh3MOYi4q9e8yJoejHSini1tolUfiS+/ih5j5j5zoJVJZgNGGA0BZgmE0AwAaKaNaLaAhpMx5kD59kpBhTmd62m0Kpy8oCGE/LymP61HS3/fdLSbmU0Ov77pbpmZ5rYtlwg/eL5N/tMTxrFWrhQ5pg3LEC4J05Hn4yonEuqIIALC+nLUEa+s02NrtUYu5uT+7W7pto0ZeXlfTHfvxmPjPddTiKIZMwrU3I5/hM1NTHkmzG5GnhNOR6eETVq6zpmpzXd/ptauLisNTLMLC/hNajknebjBcUNMWRUB/m1/WTcLJ6RM5b7dPSoU8OgesRm5LufK3MzTYzibPe3YU8h+I+bcvIfOa9qrOczEse/6AchFNc3vpbkIw1Se79M91vqeoPrL6KJZtc2lIPlhLiAN9z3TbrBeYRbsBuYhC7eA+fpHU6A33PeZZDEqNuultidPS09K+zfpHXdzhsQ2cZc1KoWubjemxOp0Nx5HwnnWWQtQqbgkEcxpIs6PoYmCwnnnQ7pySRQxTXvolU7g8hUPMf1evfPRZmsUYsiOYQGEBJimjmEU0BLyJLyIHz2IzlFrGcpzV3w+mYx/pFUox5lfrSfEjeS9XkIpzDUTo1a5zyrl3bb3xhLLEVZdKxLpOhzKBNjFhNDfvH1l3qJj0tPjf0H+YFemkeKDWuNfCYojqb2MBQdgDdbW7tyTyghKh5W85fpgFvIfM/495YAhDXUsCd2N5bp4cDYR0ISQKpCAhyKrACT04S7yLSGsRcQk1/e0nqC8pvpPSugfS24XDYk2Oi0qhOh7qbHv7j8O6/noI5SDIs6dfQJgMJzP2ecZOIw5pu16lEhSSblkP4GPoy/9s6czNYl4ho+pENAU8iS0iB89iHFrGCc9d8OpRrbiJpxlY21mV+r95AI9z8faNBlKi2tpYzTuk5OPOt7emtMyzA0IGSgKrIC6+v0jBBTc+X1P+IFd6dj7SLSzWW49olDqD3fTWAzD1bMR3nT4aD2lm816jaXUNxeSgwGFeILSeskJOzWlXFVLwqrxV7iSgWHa6xhNgBzO8r4U2BJ5Gw84VI3N4FtRpMJmZuQgkyeodH9n/E+oxqAns1vum7rtqh/8gB/3GexVFnzxmIIKmxGoPcQbgz37huOFehSrDaoit5EjUfA3HwmeS0E8rvLDyvUgIaZMaZA+eFMasSpjEM567ofSk4ttBF0TIxBvGGPc1duXMCmFiD3w2bURRbs+UhjOpxryNGAyrSfSNzQHAwVO/wAPYQM2ksY7CmlUamSDbKbjYh0Vx8mEARF1ANT4G/paYDIJ0+H1ECVEZTNoumeX78o0iSgNXTyOx+nnFl5Lvy5Sq7W8pFFg1LwFaJp1IxoEq31943DC5lUvpLuCXSBaVYp21tG1DbaIAt5yQTT1X7LOIdZhWok60aht/ZUuy/6us9J5Tedb9luP6vGGmTpWpstv607a/IVPWRkR6s8r1JZqSvUlIlWeZIeTJHzqsYhiljEMxsd0MpGRVPtIpnWQ+1/WW1z3WO/8Ah3EFYDG0nNrcTZzrNE6SwgBlFTLVBtIDgBLGIqmo2ZrXy0007qVNKS/GyC/jeVrxiQMyiQ/79RDqRTn2P6wDUiTUqW09P8AMTeZUNxAXUeIYwwp5Any19YswFnTWMSpAMWRbaBZpUyxA7t5taYAGk0tPEEbS5hcSbawhdN77SWgJUMIwMvLHBsb1GIo1r26uojH+24z/wCm8RaJcQPomrKrmVejuM67CUKh3akl/wC4DK3zBlmpKJV6kyDUMySPnYQ1ixDWZ12xj1bQFxHhJdby1w7CNVqLSpjtNew8ACx+QMvh8c23/wBELZuXwnR8J4Pg6uFYsagxAY2IN1AB0BW2unObDo1wrh1WhbFVKlGq7XSopAQLsFIOhJ379d5bxf2cYwBv4GvTxKn8qt1dXXvVjb5jylc7bOY32nXzG9znZxwmIo5GK3Bsd4WGMHHYKtQqNSr03p1BujqVYeNjuPGbLoxw2rVqqVpB0Da9ZcUz3gnn5C/jL28napMfLLkN4PwitinyUVueZ/Kv9x+m8r16ZRmQjtKzKb96kg+07HpVj6qUiKVY01UqlSlSVaaAHRSrIA1iRYgnW40nH8NqUzVpirfq86dYQdRTzDOQeXZvI15eXtbZjMbyL/BeD4nFsUw1A1Sti1ioC32LFiABoZW4jhqlCq9GsmWpTbK6mxsbd40IIIN+4z1Tphw+rQx2EqYQrTw4ahhW/h2ZCq9aHyV8p1Ukm1xrc33nA9PuNpjcQ1dF1D1KbMB2Gpq3/TtmH5iuYeIQTRk0S1AL6C2mnLnHMq/yia8HQ/vnLSPpISPIgsQLG45n4wgqt+JQT32iFbUeF/lMpVbkiA1sHTP5fmZqWpG5Fj6cu+bbrrQKNXs6eMDTvTOhsdefKWwxUAZT6HUy4WsPKx/fwk1G5jY8oQpHFPyU+hmLXqf42PoZZ+ntBYldRqOY/SAtOIH8yyytZXFx6RJUHURDJY3Gh94HtH2Z4jNgQv8A8dSovqc//OdFUM4f7Jq96Fde6qrf+SAf8J2tQyl+pIqGZBcyJI+eQYamLEMTOuyVjzadFMSaeJDj8Qp4jJy7Zw9QKfU6eNprBE3sZbCsN099bzCcYqNh/wCFspUEMHI7QF9vnvN1gOJV8OoKsSBqpLnOp52fcfAznOI0TRdK1HSlVXNTO4A2ekx/mVtD4ZTzmxwzValJW6xO1cFSu1jbe/xmWzHnuNNeUy9V2f8A61SxuX+PpNUCkEswuwsNAHXbbW9r3N7xfSjjBCr/AAtAikgA0taw2IC/lnI/x2KX7lGvm0ygAm59p0fRig9r13At+IIbBvBv1EzvPuTbHs9YT/rRUaWNx9OoKalqadtyNAcouFU/mbw/xNKAqj96z0LF8fFFhTQ2UHspT3PhYd882xJzO5IyjM1lOhGp0Pdbab6cu99cc+/DnL3tdzwb+JxLpirGmq4aqr1UY3qHB0AM9Wx3Jelvobc95uuF4LD4zhWKxT0lw1Q0ypcOtPD4irTbrEdUv2XzLY6D8bW5zmOg/TangaGJpVKPXdYQaaEDJcrlqCoTrlIVNADe05vGY96zFma+ao9QICcivUbM3Vpey3Pd3CbOcnNofIe8ej6TXvW5QOuMJbKjUuT5QcK9ixleg1tSRa23OL6wnQQL9SqDtBw76W74IpgLFUavvAvCw08Iumbrbu+kX1wvtMFT5wgzNpf9+Igh4sNILQBLEG435+MYTcXEU2sBGsfCB6R9kLn/AKof/Qf/ANRPQHM4D7Jl0xLcj1K/EdYT/uHrO8Yyt+pLczIDGZIHz5CECEJV1QUCrT5iFGLI7xNxmU5VYVTbLc5b3y3Nr2te3f4yUrMuzEDwJk4jlFCaS9jmynjeLWFxlSmc1NipBvfx741uK1muTUa53tZd/KV3/DFLIkl/FsrcfXWxwnEymuW7bhr63lTGYg1GLHdjc27zuYqQZMxk9xW5WzlZeYpNwe7aYI1JKrGBZix3JJPmTeGKUNIwSRUejDw7qDrpHvK1aBbq1BbSVUEVSj6cAplzDMgwBzyM8kwYE5pAMEzrfsyoK2L7Sq2VSy3ANiNiL7Hxjo7voPwhsLhQri1SoTUcdxIAVfgoHxvN4xhGKaUAMZEFpkD/2Q==",
    },
    {
      album_name: "BADDO",
      artist_name: "BADDO",
      best_song: "OWOBLOW",
      release_year: 2016,
      album_Cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RHKvbNnxH_PMeTd05L4Xqwd5xts-kziErg&s",
    },
  ];

  const [counts, setCounts] = useState<number[]>(new Array(albums.length).fill(0));

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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Total Quantity: {getTotalQuantity()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {albums.map((item, index) => (
          <div key={item.album_name} className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <img
              src={item.album_Cover}
              alt={`${item.album_name} cover`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="text-lg font-semibold mb-2">Album Name: {item.album_name}</div>
            <div className="text-lg mb-2">Artist Name: {item.artist_name}</div>
            <div className="text-lg mb-2">Best Song: {item.best_song}</div>
            <div className="text-lg mb-4">Release Year: {item.release_year}</div>
            <div className="flex items-center justify-center gap-4">
              <CiCirclePlus
                className="text-4xl cursor-pointer"
                onClick={() => increment(index)}
              />
              <span className="text-2xl">{counts[index]}</span>
              <CiCircleMinus
                className="text-4xl cursor-pointer"
                onClick={() => decrement(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumCard;