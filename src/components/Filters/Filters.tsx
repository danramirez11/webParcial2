import useBodies from "../../hooks/useBodies";

const Filters = () => {
    const { orderBy, filterBy } = useBodies();

    return (
        <div>
            <p>Order by</p>
            <div className="tags">
                <p className="tag" onClick={() => orderBy('gravity')}>
                    gravity
                </p>
                <p className="tag" onClick={() => orderBy('density')}>
                    density
                </p>
            </div>
            <p>Filter by</p>
            <div className="tags">
                <p className="tag" onClick={() => filterBy(true)}>
                    is a planet
                </p>
                <p className="tag" onClick={() => filterBy(false)}>
                    not a planet
                </p>
            </div>
        </div>
    )
}

export default Filters;