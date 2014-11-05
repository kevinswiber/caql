# Calypso Query Language (CaQL)

* Use a SQL-like query language over any queryable data store.
* Parser & AST provided.
* Used by [calypso](https://github.com/kevinswiber/calypso) and other projects.

## Install

`npm install caql`


## Calypso Query Language Specification

The Calypso Query Language (CaQL) has support for field selection, field aliases, filters, and ordering.

### Field Selection

#### select (optional)

`select [fields | *]`

Select is optional.  If not provided, drivers should treat it as an unbounded field selection ('*').

#### fields

Fields can contain letters, numbers, underscores, and hyphens.

Deep field selections are allowed.

Example: `select client.address.street1`

Fields can be escaped using brackets as delimiters.

Example: `select [date of birth], age, name`

#### aliases

Fields can also be aliased.

Example: `select title as t, author as a`

### Filter Expressions

#### where

Starts a filter.

Example: `select title where author="Kurt Vonnegut"`

#### comparisons

CaQL supports the following comparison expressions:

Equality: `select * where name = "Kevin"`

Inequality: `select * where name != "Rose"`

Greater than: `select * where age > 30`

Greater than or equal to: `select * where age >= 30`

Less than: `select * where price < 10`

Less than or equal to: `select * where price <= 10`

To negate comparisons, use `NOT`:  `select * where not age > 30`


#### missing

Use CaQL to discover whether an object has a property.

Undefined value: `select * where price is missing`

Defined value: `select * where price is not missing`

#### contains

`select * where name contains "Kevin"`

#### like

`select * where name like "%evi%"`

The percent symbol (`%`) acts as a wildcard character matching zero or more characters.

The `like` operator can be negated with `not like`.

`select * where name not like "%evi%"`

#### location

The location expression supports a distance along with a latitude, longitude pair.

Example: `select * where location within 30 of 90.2342, 30.23432`

Note: Not all drivers may support this option.

#### conjunctions

CaQL has support for conjunctions using the keyword `and`.

Example: `select * where name="Kevin" and age=31`

#### disjunctions

CaQL has support for disjunctions, as well, using `or`.

Example: `select * where name="Kevin" or name="Matt"`

### Sorting

#### order by

Results can be sorted.  A direction can be added.  Ascending (`asc`) is used by default.  Descending (`desc`) must be explicit.

Example: `select name, age order by age desc, name asc`

## License

MIT
