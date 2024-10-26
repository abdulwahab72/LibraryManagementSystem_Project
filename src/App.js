import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./actions/pages/Login/login";
import Signup from "./actions/pages/Signup/signup";
import HomePage from "./actions/pages/HomePage/HomePage";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import AddBookByName from "./actions/pages/AddBookByName/AddBookByName";
import Header from "./actions/components/Header";
import Footer from "./actions/components/Footer/Footer";
import AvailableBooks from "./actions/pages/ShowAvailableBooks/AvailableBooks";
import AddBookByAuthor from "./actions/pages/AddBookByAuthor/AddBookByAuthor";
import AddBookByCategory from "./actions/pages/AddBookByCategory/AddBookByCategory";
import AddStudents from "./actions/pages/AddStudents/AddStudents";
import ShowStudentsList from "./actions/pages/ShowStudentsList/ShowStudentsList";
import FooterLoginSignup from "./actions/components/Footer/FooterLoginSignup";
import IssueBookForm from "./actions/pages/IssueBookForm/IssueBookForm";
import IssueBookList from "./actions/pages/IssueBookList/IssueBookList";
import ReturnBookForm from "./actions/pages/ReturnBookForm/ReturnBookForm";
import ReturnBookList from "./actions/pages/ReturnBookList/ReturnBookList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginSignupHeaderFooter>
              <Login />
            </LoginSignupHeaderFooter>
          }
        />
        <Route
          path="/signup"
          element={
            <LoginSignupHeaderFooter>
              <Signup />
            </LoginSignupHeaderFooter>
          }
        />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/home"
            element={
              <HeaderFooter>
                <HomePage />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/addBookbyNameForm"
            element={
              <HeaderFooter>
                <AddBookByName />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/availableBooks"
            element={
              <HeaderFooter>
                <AvailableBooks />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/addBookbyAuthorForm"
            element={
              <HeaderFooter>
                <AddBookByAuthor />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/addBookbyCategoryForm"
            element={
              <HeaderFooter>
                <AddBookByCategory />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/addStudentsForm"
            element={
              <HeaderFooter>
                <AddStudents />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/studentsList"
            element={
              <HeaderFooter>
                <ShowStudentsList />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/issueBookForm"
            element={
              <HeaderFooter>
                <IssueBookForm />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/issueBookList"
            element={
              <HeaderFooter>
                <IssueBookList />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/returnBookForm"
            element={
              <HeaderFooter>
                <ReturnBookForm />
              </HeaderFooter>
            }
          />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/returnBookList"
            element={
              <HeaderFooter>
                <ReturnBookList />
              </HeaderFooter>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HeaderFooter({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
function LoginSignupHeaderFooter({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <FooterLoginSignup />
    </div>
  );
}
export default App;
