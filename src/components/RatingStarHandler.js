import React from 'react';

const RatingStarHandler = ({ value, rating }) => {

  return (
    <div className="star-rating">
      <div className="flex-row gap-xxs">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            {
              i + 1 <= Math.floor(rating)
                ?
                <svg width="17" height="17" viewBox="0 0 15 15" fill='#B79977' xmlns="http://www.w3.org/2000/svg" style={{ color: '#B79977' }}>
                  <g clipPath="url(#clip0_4042_171)">
                    <path
                      d="M6.7527 1.29688L5.05218 4.7448L1.24749 5.29948C0.565198
                      5.39844 0.29176 6.23959 0.786552 6.72136L3.53916 9.40365L2.88811
                      13.1927C2.77093 13.8776 3.49228 14.3906 4.09645 14.0703L7.50009
                      12.2813L10.9037 14.0703C11.5079 14.388 12.2293 13.8776 12.1121
                      13.1927L11.461 9.40365L14.2136 6.72136C14.7084 6.23959 14.435
                      5.39844 13.7527 5.29948L9.94801 4.7448L8.24749 1.29688C7.9428
                      0.682296 7.05999 0.674484 6.7527 1.29688Z"
                      fill='#B79977' stroke="#ccc" strokeWidth="1"
                    />
                  </g>
                  <defs><clipPath id="clip0_4042_171"><rect width="17" height="17" fill="red" /></clipPath></defs>
                </svg>
                :
                i < rating
                  ?
                  <svg width="17" height="17" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="halfGradient">
                        <stop offset="50%" stopColor="#B79977" />
                        <stop offset="50%" stopColor="#f1f1f1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M6.7527 1.29688L5.05218 4.7448L1.24749 5.29948C0.565198
                      5.39844 0.29176 6.23959 0.786552 6.72136L3.53916 9.40365L2.88811
                      13.1927C2.77093 13.8776 3.49228 14.3906 4.09645 14.0703L7.50009
                      12.2813L10.9037 14.0703C11.5079 14.388 12.2293 13.8776 12.1121
                      13.1927L11.461 9.40365L14.2136 6.72136C14.7084 6.23959 14.435
                      5.39844 13.7527 5.29948L9.94801 4.7448L8.24749 1.29688C7.9428
                      0.682296 7.05999 0.674484 6.7527 1.29688Z"
                      fill="url(#halfGradient)"
                      stroke="#ccc"
                      strokeWidth="1"
                    />
                  </svg>
                  :
                  <svg width="17" height="17" viewBox="0 0 15 15" fill='#f1f1f1' xmlns="http://www.w3.org/2000/svg" style={{ color: '#B79977' }}>
                    <g clipPath="url(#clip0_4042_171)">
                      <path
                        d="M6.7527 1.29688L5.05218 4.7448L1.24749 5.29948C0.565198
                      5.39844 0.29176 6.23959 0.786552 6.72136L3.53916 9.40365L2.88811
                      13.1927C2.77093 13.8776 3.49228 14.3906 4.09645 14.0703L7.50009
                      12.2813L10.9037 14.0703C11.5079 14.388 12.2293 13.8776 12.1121
                      13.1927L11.461 9.40365L14.2136 6.72136C14.7084 6.23959 14.435
                      5.39844 13.7527 5.29948L9.94801 4.7448L8.24749 1.29688C7.9428
                      0.682296 7.05999 0.674484 6.7527 1.29688Z"
                        fill='#f1f1f1' stroke="#ccc" strokeWidth="1"
                      />
                    </g>
                    <defs><clipPath id="clip0_4042_171"><rect width="17" height="17" fill='#f1f1f1' /></clipPath></defs>
                  </svg>
            }
          </div>
        ))}
      </div>
    </div>
  )
};
export default RatingStarHandler