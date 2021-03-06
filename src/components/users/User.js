import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = () => {
  const githubContext = useContext(GithubContext)
  const { getUser, loading, user, repos, getUserRepos } = githubContext
  const { login } = useParams()
  console.log('login =>', login)
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  console.log('user =>', user)

  useEffect(() => {
    getUser(login)
    getUserRepos(login)
    // eslint-disable-next-line
  }, []) // the eslint line is to avoid the warning message that the [] are empty.

  if (loading) return <Spinner />

  return (
    <Fragment>
      <Link to="/" className="btn btn-light ">
        back to search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <FontAwesomeIcon
          icon="fa-solid fa-check text-success"
          style={{ color: 'rgb(40, 167, 69)' }}
        />
      ) : (
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{ color: 'rgb(220, 53, 69)' }}
        />
      )}
      {/* {hireable ? (
        <i className="fa-solid fa-check"></i>
      ) : (
        <i className="fa-solid fa-xmark"></i>
      )} */}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="Profile pic"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  )
}

export default User
