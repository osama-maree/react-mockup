import React from 'react'
import { BsThreeDots } from "react-icons/bs";
const Pages = () => {
  return (
    <div className="pages">
      <h4 className="text-white m-0 title">Trends for you</h4>

      <div>
        <div className="itemTrend">
          <div className="items">
            <small>Gaming.Trending</small>
            <h4 className="m-0 text-white">#VALORANTChampions</h4>
            <small>27.9K posts</small>
          </div>
          <BsThreeDots className="text-white" />
        </div>
        <div className="cont">
          <h4 dir="rtl" className="text-white m-0">
            الانستا
          </h4>
          <small>1,44 posts</small>
        </div>
      </div>

      <div>
        <div className="itemTrend">
          <div className="items">
            <small>Gaming.Trending</small>
            <h4 className="m-0 text-white">#Mako</h4>
            <small>14,1K posts</small>
          </div>
          <BsThreeDots className="text-white" />
        </div>
        <div className="cont">
          <h4 dir="rtl" className="text-white m-0">
            رسالة_اليوم#
          </h4>
          <small>22,3K posts</small>
        </div>
      </div>

      <div>
        <div className="itemTrend">
          <div className="items">
            <small></small>
            <h4 className="m-0 text-white">#Messi</h4>
            <small>77.2K posts</small>
          </div>
          <BsThreeDots className="text-white" />
        </div>
        <div className="cont">
          <h4 dir="rtl" className="text-white m-0">
            جامعة_طيبة#
          </h4>
          <small>{null}</small>
        </div>

        <div className="cont">
          <h4 dir="rtl" className="text-white m-0">
            ايفون
          </h4>
          <small>27.6K posts</small>
        </div>

        <div>
          <div className="itemTrend">
            <div className="items">
              <small>Gaming.Trending</small>
              <h4 className="m-0 text-white">fnatic</h4>
              <small>8,748K posts</small>
            </div>
            <BsThreeDots className="text-white" />
          </div>
          <div className="cont">
            <h4 dir="rtl" className="text-white m-0">
              #الاعلام العبري
            </h4>
            <small>{null}</small>
          </div>
        </div>

        <div>
          <div className="itemTrend">
            <div className="items">
              <small>{null}</small>
              <h4 className="m-0 text-white">#InterMaimiCF</h4>
              <small>88,4KK posts</small>
            </div>
            <BsThreeDots className="text-white" />
          </div>
        </div>
      </div>

      <small className="text-info my-3">Show more</small>
    </div>
  );
}

export default Pages