import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import BlueButton from "../../../components/BlueButton";
import { Formik, ErrorMessage } from "formik";
import OnboardingLayout from "../../../layout/OnboardingLayout";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";

const CREATE_POSTGRES_DATABASE = gql`
  mutation CreatePostgresDatabase(
    $username: String
    $password: String
    $port: Int
    $hostname: String
    $database: String
    $schema: String
    $ssl: Boolean
  ) {
    createPostgresDatabase(
      password: $password
      username: $username
      database: $database
      port: $port
      hostname: $hostname
      schema: $schema
      ssl: $ssl
    ) {
      id
      username
      password
      port
      hostname
      schema
    }
  }
`;

const PostgresPage = () => {
  const router = useRouter();
  const [createPostgres, { data: dataPostgres, loading, error }] = useMutation(
    CREATE_POSTGRES_DATABASE
  );
  const [didSucceed, setSucceeded] = useState(false);

  return (
    <OnboardingLayout index={1}>
      <>
        <h1>Postgres Connection</h1>
        <p>Provides secure access to your Postgres database.</p>
        <div className={styles.form_box}>
          <Formik
            initialValues={{
              hostname: "localhost",
              username: "helson",
              database: "sequence_dev",
              password: "",
              port: "5432",
              schema: "public",
              ssl: "false",
            }}
            onSubmit={(values, { setSubmitting }): void => {
              if (didSucceed) {
                router.push("/onboarding/integrations");
                return;
              }
              values.port = parseInt(values.port) as any;
              values.ssl = (values.ssl === "true") as any;
              createPostgres({
                variables: values,
              })
                .then(() => {
                  setSucceeded(true);
                  setSubmitting(false);
                })
                .catch(() => setSubmitting(false));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="hostname">Hostname</label>
                <input
                  type="hostname"
                  name="hostname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hostname}
                  placeholder="Hostname"
                />
                <ErrorMessage name="hostname" component="div" />

                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Username"
                />
                <ErrorMessage name="username" component="div" />
                {errors.username && touched.username && errors.username}

                <label htmlFor="username">Database</label>
                <input
                  type="database"
                  name="database"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.database}
                  placeholder="database"
                />
                <ErrorMessage name="database" component="div" />
                {errors.database && touched.database && errors.database}

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                {errors.password && touched.password && errors.password}
                <label htmlFor="port">Port</label>
                <input
                  type="port"
                  name="port"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.port}
                  placeholder="Port"
                />
                {errors.port && touched.port && errors.port}
                <label htmlFor="schema">Schema</label>
                <input
                  type="schema"
                  name="schema"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.schema}
                  placeholder="Schema"
                />
                {errors.schema && touched.schema && errors.schema}
                <input
                  type="checkbox"
                  name="ssl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ssl}
                  style={{ display: "inline-flex" }}
                ></input>
                <label htmlFor="ssl" style={{ display: "inline-flex" }}>
                  Use SSL
                </label>
                {error && <p style={{ color: "red" }}>{error.message}</p>}
                {dataPostgres && dataPostgres.createPostgresDatabase && (
                  <p>Successfully saved database</p>
                )}
                <BlueButton
                  type="submit"
                  text={
                    loading ? (
                      <CircularProgress />
                    ) : error ? (
                      error.message
                    ) : dataPostgres && dataPostgres.createPostgresDatabase ? (
                      "Next"
                    ) : (
                      "Test Connection"
                    )
                  }
                  disabled={isSubmitting}
                  style={{ marginBottom: "0px" }}
                />
              </form>
            )}
          </Formik>
        </div>
        <p className={styles.not_ready_text}>
          <Link href="/onboarding/datasources">
            <>
              Not ready?{" "}
              <span className={styles.bold_text}>Click here to Skip</span>
            </>
          </Link>
        </p>
      </>
    </OnboardingLayout>
  );
};

export default PostgresPage;