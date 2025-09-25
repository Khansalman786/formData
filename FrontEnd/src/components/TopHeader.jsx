import React from "react";

const TopHeader = () => {
  return (
    <>
       {/* <!-- header top start  --> */}

        <div className="tp-header-top-2 black-bg p-relative tp-header-top-border d-none d-md-none d-xl-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="tp-header-info d-flex align-items-center">
                            <div className="tp-header-info-item">
                                <a href="#">
                                    <span>
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i className="fa-brands fa-instagram"></i>
                                    </span>
                                </a>

                                <a href="#">
                                    <span>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </span>
                                </a>
                            </div>


                            <div className="tp-header-info-item">
                                <a href="tel:+978768567567">
                                    <span>
                                        <i className="fa fa-phone"></i>
                                    </span> +978768567567
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInRight" data-wow-delay="500ms">
                        <div
                            className="tp-header-top-right tp-header-top-black d-flex align-items-center justify-content-end z-index-111">
                            <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
                                <div className="tp-header-top-menu-item tp-header-lang">
                                    <div className="tp-header-info d-flex align-items-center">
                                        <div className="tp-header-info-item">
                                            <a href="mailto:contact@brulon.in">
                                                <span>
                                                    <i className="fa fa-envelope"></i>
                                                </span> contact@brulon.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                               

                                <div className="tp-header-top-menu-item tp-header-lang">
                                    <div className="tp-header-info d-flex align-items-center">
                                        <div className="tp-header-info-item">
                                            {/* <!-- <div className="tp-header-action-item">
                                                <button className="tp-header-action-btn cartmini-open-btn">
                                                    <i className="fa-regular fa-shopping-bag"></i>
                                                    <span className="tp-header-action-badge">13</span>
                                                </button>
                                            </div> --> */}


                                            <div className="tp-header-action-item">
                                                <button ng-click="toggleCart($event)"
                                                    className="tp-header-action-btn cartmini-open-btn">
                                                    <i className="fa-regular fa-shopping-bag"></i>
                                                    <span className="tp-header-action-badge"></span>
                                                    {/* <!-- Dynamically shows the number of items in the cart --> */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                             

                                <div className="tp-header-top-menu-item tp-header-setting d-md-flex align-items-center">
                                    <span ng-click="toggleSettingsMenu($event)"
                                        className="tp-header-setting-toggle ml-5 d-md-flex gap-2 align-items-center"
                                        id="tp-header-setting-toggle" style="cursor:pointer">
                                        <i className="fa-regular fa-user-circle fa-user-circle-style "></i>
                                        <h5 className="tp-header-login-title mb-0">
                                            
                                            <span ng-if="!auth.isLoggedIn" className="login-link">
                                              
                                            </span>
                                            <span ng-if="auth.isLoggedIn" className="profile-link">My Profile</span>
                                        </h5>
                                    </span>

                                   
                                    <ul className="custom-menu" id="custom-menu"
                                        ng-className="{'tp-setting-list-open': isSettingsMenuOpen}">
                                       
                                        <li ng-if="!auth.isLoggedIn">
                                            <i className="fa-regular fa-user-plus me-2 p-2"></i>
                                            <a ></a>
                                        </li>

                                       
                                        <li ng-if="auth.isLoggedIn">
                                            <i className="fa-regular fa-user-circle me-2 p-2"></i>
                                            <a ng-href="{{auth.profileUrl}}">View Profile</a>
                                        </li>
                                       
                                        <li ng-if="auth.isLoggedIn">
                                            <i className="fa-regular fa-heart me-2 p-2"></i>
                                            <a href="wishlist.html">Wishlist</a>
                                        </li>
                                        <li ng-if="auth.isLoggedIn">
                                            <i className="fa-solid fa-sign-out-alt me-2 p-2"></i>
                                            <a href="#" ng-click="logout()" className="logout-link">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                               

                                <button ng-click="search.isVisible = !search.isVisible" className="tp-header-action-btn">
                                    <i className="fas fa-search"></i>
                                </button>

                               
                                <div className="custom-search-overlay" ng-show="search.isVisible"
                                    ng-click="search.isVisible = false">
                                    <div className="custom-search-box" ng-click="$event.stopPropagation()">

                                        
                                        <button className="close-btn" ng-click="search.isVisible = false">
                                            <i className="fas fa-times"></i>
                                        </button>

                                      
                                        <form className="custom-search-form" ng-submit="performSearch()">
                                            <div className="input-wrapper">
                                                
                                                <button type="button" className="close-inside-btn" ng-click="clearSearch()"
                                                    ng-show="search.term">
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                          
                                        </form>


                                      
                                        <div className="custom-search-results" ng-show="search.isDropdownVisible">
                                            <ul>
                                                <li ng-repeat="product in search.results"
                                                    ng-click="selectSearchItem(product.CategoryID, product.SubCategoryID, product.ProductID, product.ProductType)">
                                                    <div className="custom-result-item">
                                                        <div className="custom-result-image">
                                                            
                                                        </div>
                                                        <div className="custom-result-details">
                                                            <h4></h4>
                                                            <p>
                                                               
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="no-results"
                                                ng-show="!search.isLoading && search.results.length === 0">
                                                No products found.
                                            </div>
                                        </div>
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
};

export default TopHeader;
