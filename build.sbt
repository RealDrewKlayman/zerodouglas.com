name := "zerodouglas"
organization := "com.zerodouglas"

lazy val root = (project in file("blog-api"))
  .settings(
    name := "blog-api",
    scalaVersion := "2.13.2",
    libraryDependencies ++= Seq(
          "org.scalatest" %% "scalatest" % "3.1.1"
        )
  )
