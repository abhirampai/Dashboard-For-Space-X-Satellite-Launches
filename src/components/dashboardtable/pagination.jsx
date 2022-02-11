import { Pagination as AntdPagination } from "antd";

const Pagination = ({ pageCount, gotoPage, pageIndex, total }) => {
  return (
    <div className="mt-4">
      <AntdPagination
        onChange={(page) => {
          gotoPage(page - 1);
        }}
        pageSize={pageCount}
        current={pageIndex + 1}
        total={total}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Pagination;
