import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import './reset.css';
import {
  container,
  headerTitle,
  headerMenu,
  header,
  headerBar,
  headerLinks,
  darkMode,
  pageWrapper,
  main,
  styleContent,
  styleContentName,
  styleSubInfo,
  categoryDate,
  category,
  date,
  styleTagList,
  styleTag,
  sidebar,
  buttonWrapper,
  filterClearBtn,
  categoryWrapper,
  sideCategory,
  sideCategoryTitle,
  sideSubCategory,
  sideSubCategoryComponent,
  sideCount,
} from './layout.module.css';
function Header() {
  return(
    <>
      <header className={header}>
        <div className={headerBar}>
          <div className={headerTitle}>
            <Link className={headerLinks} to='/'>Aquaman Blog</Link>
          </div>  
          <div className={headerMenu}>
            <Link className={headerLinks} to="/about">About</Link>
            <Link className={headerLinks} to="/article">Article</Link>
            <div className={darkMode}></div>
          </div>
        </div>
      </header>
    </>
  );
}

function Main() {
  return(
    <>
      <main className={main}>
        <a href='/'>
          <div className={styleContent}>
            <div className={styleContentName}>초전 설득</div>
            <div className={styleSubInfo}>
              <div className={categoryDate}>
                <div className={category}>책 / 자기개발</div>
                <div className={date}>2022-04-04</div>
              </div>
              <div className={styleTagList}>
                <div className={styleTag}>심리학</div>
              </div>
            </div>
          </div>
        </a>
        <a href='/'>
          <div className={styleContent}>
            <div className={styleContentName}>초전 설득</div>
            <div className={styleSubInfo}>
              <div className={categoryDate}>
                <div className={category}>책 / 자기개발</div>
                <div className={date}>2022-04-04</div>
              </div>
              <div className={styleTagList}>
                <div className={styleTag}>심리학</div>
              </div>
            </div>
          </div>
        </a>
        <a href='/'>
          <div className={styleContent}>
            <div className={styleContentName}>초전 설득</div>
            <div className={styleSubInfo}>
              <div className={categoryDate}>
                <div className={category}>책 / 자기개발</div>
                <div className={date}>2022-04-04</div>
              </div>
              <div className={styleTagList}>
                <div className={styleTag}>심리학</div>
              </div>
            </div>
          </div>
        </a>
        <a href='/'>
          <div className={styleContent}>
            <div className={styleContentName}>초전 설득</div>
            <div className={styleSubInfo}>
              <div className={categoryDate}>
                <div className={category}>책 / 자기개발</div>
                <div className={date}>2022-04-04</div>
              </div>
              <div className={styleTagList}>
                <div className={styleTag}>심리학</div>
              </div>
            </div>
          </div>
        </a>
        <a href='/'>
          <div className={styleContent}>
            <div className={styleContentName}>초전 설득</div>
            <div className={styleSubInfo}>
              <div className={categoryDate}>
                <div className={category}>책 / 자기개발</div>
                <div className={date}>2022-04-04</div>
              </div>
              <div className={styleTagList}>
                <div className={styleTag}>심리학</div>
              </div>
            </div>
          </div>
        </a>
        <a href='/'>
          <div className={styleContent}>
            <div className={styleContentName}>초전 설득</div>
            <div className={styleSubInfo}>
              <div className={categoryDate}>
                <div className={category}>책 / 자기개발</div>
                <div className={date}>2022-04-04</div>
              </div>
              <div className={styleTagList}>
                <div className={styleTag}>심리학</div>
              </div>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}

function Sidebar() {
  return(
    <>
      <sidebar className={sidebar}>
        <div className={buttonWrapper}>
          <button className={filterClearBtn}>----$----</button>
        </div>
        <div className={categoryWrapper}>
          <div className={sideCategory}>
            <div className={sideCategoryTitle}>

            </div>
            <div className={sideSubCategory}>
              <div className={sideSubCategoryComponent}>
                "blog.aquaman.me"
                <div className={sideCount}>(0)</div>
              </div>
              <div className={sideSubCategoryComponent}>
                "express.js"
                <div className={sideCount}>(0)</div>
              </div>
              <div className={sideSubCategoryComponent}>
                "backend"
                <div className={sideCount}>(0)</div>
              </div>
              <div className={sideSubCategoryComponent}>
                "algorithm"
                <div className={sideCount}>(0)</div>
              </div>
              <div className={sideSubCategoryComponent}>
                "etc"
                <div className={sideCount}>(0)</div>
              </div>
            </div>
          </div>
          <div className={sideCategory}>
            <div className={sideCategoryTitle}>
            </div>
            <div className={sideSubCategory}>              
              <div className={sideSubCategoryComponent}>
                "개발"
                <div className={sideCount}>(0)</div>
              </div>
              <div className={sideSubCategoryComponent}>
                "자기개발"
                <div className={sideCount}>(0)</div>
              </div>
            </div>
          </div>
          <div className={sideCategory}>
            <div className={sideCategoryTitle}>
            </div>
            <div className={sideSubCategory}>
              <div className={sideSubCategoryComponent}>
                "개발"
                <div className={sideCount}>(0)</div>
              </div>
              <div className={sideSubCategoryComponent}>
                "인생"
                <div className={sideCount}>(0)</div>
              </div>
            </div>
          </div>
        </div>
      </sidebar>
    </>
  );
}

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <div className={container}>
        <Header></Header>
        <div className={pageWrapper}>
          <Main></Main>
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  )
}

export default Layout