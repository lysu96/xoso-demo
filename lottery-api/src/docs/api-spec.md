# 📖 API Specification - Lottery API + Blog + Auth

Dự án API RESTful gồm các module: **Auth & User, Lottery, Blog, SEO/Analytics, System**.  
File này có thể dùng để tham khảo nhanh hoặc import sang Postman/Swagger (sau khi chuyển OpenAPI format).

---

## 🔑 Auth & User API

| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| POST   | /api/auth/register | Đăng ký tài khoản | Public |
| POST   | /api/auth/login | Đăng nhập (access + refresh token) | Public |
| POST   | /api/auth/refresh | Lấy access token mới | Public |
| POST   | /api/auth/logout | Đăng xuất | Auth |
| GET    | /api/auth/me | Lấy thông tin user hiện tại | Auth |
| PUT    | /api/users/:id | Cập nhật thông tin user | User/Admin |
| GET    | /api/users | Danh sách user | Admin |
| DELETE | /api/users/:id | Xoá user | Admin |
| POST   | /api/auth/forgot-password | Yêu cầu reset mật khẩu | Public |
| POST   | /api/auth/reset-password | Đặt mật khẩu mới | Public |

---

## 🎲 Lottery API

| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET    | /api/results?date=YYYY-MM-DD | KQ 3 miền theo ngày | Public |
| GET    | /api/results/:region?date=YYYY-MM-DD | KQ 1 miền theo ngày | Public |
| GET    | /api/latest-results | KQ mới nhất cả 3 miền | Public |
| GET    | /api/latest-results/:region | KQ mới nhất theo miền | Public |
| GET    | /api/search?number=XX | Tra cứu lô tô | Public |
| POST   | /api/results | Thêm kết quả | Admin |
| PUT    | /api/results/:id | Cập nhật kết quả | Admin |
| DELETE | /api/results/:id | Xoá kết quả | Admin |

---

## 📝 Blog API

### Articles
| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET    | /api/articles | Danh sách bài viết (filter/search) | Public |
| GET    | /api/articles/:slug | Chi tiết bài viết | Public |
| POST   | /api/articles | Tạo bài viết | Author+ |
| PUT    | /api/articles/:id | Cập nhật bài viết | Author/Editor/Admin |
| DELETE | /api/articles/:id | Xoá bài viết | Admin |
| POST   | /api/articles/:id/publish | Xuất bản bài viết | Editor/Admin |
| GET    | /api/articles/:id/revisions | Lịch sử phiên bản | Author+ |

### Categories & Tags
| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET    | /api/categories | Danh sách categories | Public |
| POST   | /api/categories | Thêm category | Admin |
| PUT    | /api/categories/:id | Cập nhật category | Admin |
| DELETE | /api/categories/:id | Xoá category | Admin |
| GET    | /api/tags | Danh sách tags | Public |
| POST   | /api/tags | Thêm tag | Admin |
| DELETE | /api/tags/:id | Xoá tag | Admin |

### Media
| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| POST   | /api/media | Upload hình ảnh (alt, caption) | Author+ |
| GET    | /api/media/:id | Thông tin ảnh | Public |
| DELETE | /api/media/:id | Xoá ảnh | Admin |

---

## 📈 SEO & Analytics

| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET    | /sitemap.xml | Sitemap cho Google | Public |
| GET    | /rss.xml | RSS feed | Public |
| GET    | /api/redirects | Danh sách redirect | Admin |
| POST   | /api/redirects | Tạo redirect mới | Admin |
| DELETE | /api/redirects/:id | Xoá redirect | Admin |
| POST   | /api/articles/:id/view | Tăng view bài viết | Public |
| GET    | /api/analytics/articles/:id/views | Thống kê view bài viết | Admin |

---

## ⚙️ System

| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET    | /health | Kiểm tra API | Public |
| GET    | /api/settings | Xem cấu hình site | Public |
| PUT    | /api/settings | Cập nhật cấu hình | Admin |

---

## 📜 OpenAPI Draft (YAML)

```yaml
openapi: 3.0.0
info:
  title: Lottery + Blog API
  version: 1.0.0
servers:
  - url: http://localhost:3000

paths:
  /api/auth/login:
    post:
      summary: Đăng nhập
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                password:
                  type: string
      responses:
        "200":
          description: Đăng nhập thành công
  /api/results:
    get:
      summary: Lấy kết quả xổ số theo ngày
      parameters:
        - in: query
          name: date
          schema:
            type: string
            format: date
      responses:
        "200":
          description: Danh sách kết quả
```
