import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./filme-info.css";

import api from "../../Services/Api";

export default function Filmes(){
    const {id} = useParams();
    const navigate = useNavigate();
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
                //console.log("Filme não encontrado")
                navigate("/", {replace: true});
                return;
            })
        }

        loadfilme();

        return() => {
            //console.log("Compomente foi desmontando");
        }

        

    },[navigate, id]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix");


        let filmesalvos = JSON.parse(minhaLista) || [];
        
    }
    
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
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
            
        </div>
    )
}