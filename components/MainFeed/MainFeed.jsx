import React from 'react';
import './css/index.css'

const MainFeed = () => {
    return (
        <div className='mainFeed'>
            <div className='wrapper'>
                <div className='feed-list'>
                    <form className='write-feed'>
                        <div className='profile-image'></div>
                        <div className='inp'>
                            <input type="text" placeholder='오늘은 무슨 일이 있었나요?' />
                        </div>
                        <div className='get-image'>
                            <label htmlFor="get-image-input">
                                <img src="/assets/main/add-image.svg" alt="이미지추가하기" />
                            </label>
                            <input type="file" id='get-image-input'/>
                        </div>
                    </form>
                    <div className='feed'>
                        <div className='top'>
                            <div className='profile-image'></div>
                            <div className='profile-desc'>
                                <div className='nickname txt-bold'>길동 홍</div>
                                <div className='timestamp'>08:15 pm, yesterday</div>
                            </div>
                        </div>{/* top */}
                        <div className='contents'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum magnam ipsam laborum quae optio hic mollitia eaque consequuntur obcaecati quaerat ratione ad repellendus ea totam animi, cupiditate provident unde!
                        </div>{/* contents */}
                        <div className='bottom'>
                            <div className='like'>
                                <div className='asset'>
                                    <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                                </div>
                                <div className='count txt-bold'>
                                    25k
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='asset'>
                                    <img src="/assets/feed/comment.svg" alt="댓글" />
                                </div>
                                <div className='count txt-bold'>25k</div>
                            </div>
                        </div> {/* bottom */}
                    </div>{/* feed */}
                    <div className='feed'>
                        <div className='top'>
                            <div className='profile-image'></div>
                            <div className='profile-desc'>
                                <div className='nickname txt-bold'>길동 홍</div>
                                <div className='timestamp'>08:15 pm, yesterday</div>
                            </div>
                        </div>{/* top */}
                        <div className='contents'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum magnam ipsam laborum quae optio hic mollitia eaque consequuntur obcaecati quaerat ratione ad repellendus ea totam animi, cupiditate provident unde!
                            <div className='image'></div>
                        </div>{/* contents */}
                        <div className='bottom'>
                            <div className='like'>
                                <div className='asset'>
                                    <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                                </div>
                                <div className='count txt-bold'>
                                    25k
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='asset'>
                                    <img src="/assets/feed/comment.svg" alt="댓글" />
                                </div>
                                <div className='count txt-bold'>25k</div>
                            </div>
                        </div> {/* bottom */}
                    </div>{/* 이미지가 있는 feed */}
                </div>
                {/* feed-list */}
                <div className='friend-list'>
                    <div className='my-profile'>
                        <div className='profile-image'></div>
                        <div className='nickName'>길동 홍</div>
                    </div>
                    <div className='my-friends'>
                        <div className='title txt-bold'>나의팔로워</div>
                        <ul className='friends'>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickName'>미니마우스</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickName'>미키마우스</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickName'>도날드덕</div>
                            </li>
                            <li className='friend'>
                                <div className='profile-image'></div>
                                <div className='nickName'>구피</div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* friend-list */}
            </div>
        </div>
    );
};

export default MainFeed;