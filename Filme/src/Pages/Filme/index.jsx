import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./filme-info.css";

import api from "../../Services/Api";

export default function Filmes(){
    const {id} = useParams();
    const[ filme, setFilme] = useState ({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadfilme() {
            await api.get(`/movie/${id}`,{
                params:{
                api_key: "b0a0c8bfa3379431090ea52c3bb2110e",
                language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado")
            })
        }

        loadfilme();

        return() => {
            console.log("Compomente foi desmontando");
        }

        

    },[])
    
    if(loading){
        return(
            <div className="filme-info">
             <h1>Carregando filme-info</h1>
            </div>
        )
    }
    return(
         <div className="filme-info">
            <h1>{filme.title}</h1>
             <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme}/> 
             <h3>Sinopse</h3>
             <span>{filme.overview}</span>
             <strong>Avalição:{filme.vote_average}/10</strong>
            
            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="http://">Trailer</a>
                </button>
            </div>
            
        </div>
    )
}