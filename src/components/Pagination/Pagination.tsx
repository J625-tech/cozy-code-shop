import "./Pagination.scss";

interface PaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from( 
        { length: totalPages },
         (_, index) => index + 1 
    );

    return(
        <div className="Pagination">
            <button className="pagination-btn"
            onClick={() => onChange(page - 1)}
            disabled={page === 1}
            >

            </button>
            {pages.map((i) => (
                <button key={i}
                className={i === page ? "pagination-btn active" : "pagination-btn"
                }
                onClick={() => onChange(i)}
                >
                    {i}
                </button>
            ))}

            <button className="pagination-btn"
            onClick={() => onChange(page + 1)}
            disabled={page === totalPages}
            >

            </button>
        </div>
    );
};

export default Pagination;