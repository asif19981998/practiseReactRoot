import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash"
import Pagination from './common/pagination';
import { paginate } from "../utils/paginate";
import Listgroup from './common/listGroup';
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from './moviesTable';
class Movies extends Component {
    state = { 
        movies:[],
        genre:[],
        currentPage:1,
        pageSize:4,
        selectedGenre:"",
        sortColumn:{path:"title",order:"asc"}
     }
    componentDidMount(){
        const genre =[{_id:"",name:"All Genre Movies"},...getGenres()]
        this.setState({genre,movies:getMovies()})
    }

    handleDelete(movie){
        const movies = this.state.movies.filter(m=> m._id != movie._id)
        this.setState({movies})
    }
    handleLike(movie){
        const movies =[...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index]=movie
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }
    handlePageChange=(page)=>{
       this.setState({currentPage:page})
    }
    handleItemSelect=(genre)=>{
        this.setState({selectedGenre:genre,currentPage:1})
    }
    handleSort=sortColumn=>{
       
       this.setState({sortColumn })
    }
    
    render() { 
        const {length:count}=this.state.movies
        const {currentPage,pageSize,movies,selectedGenre,genre,sortColumn}=this.state
        
        if (count===0) return <p>There has no movie</p>
        
        const filterdMovies = selectedGenre && selectedGenre._id?
         movies.filter(m=>m.genre._id == selectedGenre._id):movies
    
        const sorted=_.orderBy(filterdMovies,[sortColumn.path],[sortColumn.order])

        const moviesByPaginate = paginate(sorted,currentPage,pageSize)
        

        
        
        return ( 
            <div className="row">
                <div className="col-3">
                    <Listgroup
                     items={genre}
                     onItemSelected={this.handleItemSelect}
                     selectedGenre={selectedGenre}
                     
                     />
                </div>
                
                <div className="col">
                <p>Total {filterdMovies.length} Movies in the Table</p>
                <MoviesTable 
                    movies={moviesByPaginate}
                    sortColumn={sortColumn}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                 />
                <Pagination 
                    itemsCount={filterdMovies.length}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                />
                </div>
                
            </div>
         );
    }
}
 
export default Movies;