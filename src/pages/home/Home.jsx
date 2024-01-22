import { React } from 'react';
import bubble_sort_thumbnail from '../../assets/images/bubble_sort_thumbnail.png';
import cache_mapping_thumbnail from '../../assets/images/cache_mapping_thumbnail.png';
import caesar_thumbnail from '../../assets/images/caesar_thumbnail.png';
import raycasting_thumbnail from '../../assets/images/raycasting_thumbnail.png';

export function Home(props) {
    let style = {
        maxWidth: 540
    };

    return (
        <>
            <h1 className="text-center pt-4">Projects</h1>
            <div className="container text-center">
                <div className="row g-2">
                    <div className="col-6">
                        <div className="p-3">
                            <div className="card mb-3" style={style}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <a href="cache_mapping/">
                                            <img src={cache_mapping_thumbnail} className="img-fluid rounded-start" alt="Cache Mapping"></img>
                                        </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Cache Mapping Simulator</h5>
                                            <p className="card-text">A simulation of cache memory mapping.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3">
                            <div className="card mb-3" style={style}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <a href="bubble_sort/">
                                            <img src={bubble_sort_thumbnail} className="img-fluid rounded-start" alt="..."></img>
                                        </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Bubble Sort Visualization</h5>
                                            <p className="card-text">A visualization of the basic sorting algorithm.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3">
                            <div className="card mb-3" style={style}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={raycasting_thumbnail} className="img-fluid rounded-start" alt="Raycasting"></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Raycasting Engine</h5>
                                            <p className="card-text">A simplified implementation of the classic algorithm.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-3">
                            <div className="card mb-3" style={style}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <a href="https://github.com/rafaelsalb/caesars-cypher">
                                            <img src={caesar_thumbnail} className="img-fluid rounded-start" alt="Caesar's Cypher"></img>
                                        </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Caesar's Cypher</h5>
                                            <p className="card-text">A command line tool for encrypting and decrypting messages.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;